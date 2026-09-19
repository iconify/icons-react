import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jju8kfsae {
  fill: currentColor;
  d: path("M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1m-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1m-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2");
}

.kyni42seb {
  fill: currentColor;
  d: path("M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2");
}
</style><path class="jju8kfsae"/><path class="kyni42seb"/>`,
		"fallback": "ic:outline-electrical-services",
	});
}

export default Component;
