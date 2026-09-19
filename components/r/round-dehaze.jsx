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
		"content": `<style>.tzyyhn2xs {
  fill: currentColor;
  d: path("M2 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m0-5c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1");
}
</style><path class="tzyyhn2xs"/>`,
		"fallback": "ic:round-dehaze",
	});
}

export default Component;
