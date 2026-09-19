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
		"content": `<style>.c0xzsvhxu {
  fill: currentColor;
  d: path("M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z");
}

.q83kd7j8c {
  fill: currentColor;
  d: path("M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z");
}
</style><path class="q83kd7j8c"/><path class="c0xzsvhxu"/>`,
		"fallback": "ic:sharp-electrical-services",
	});
}

export default Component;
