import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptb5llbcj {
  fill: currentColor;
  d: path("M76 64a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12m140 52H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24m0 64H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24M44 112a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 128a16 16 0 1 0 16 16a16 16 0 0 0-16-16");
}
</style><path class="ptb5llbcj"/>`,
		"fallback": "ph:list-bullets-bold",
	});
}

export default Component;
