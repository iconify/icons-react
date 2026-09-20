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
		"content": `<style>.kvx2wsbuz {
  fill: currentColor;
  d: path("M82 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6m134 58H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 64H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12M44 54a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 128a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0-64a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="kvx2wsbuz"/>`,
		"fallback": "ph:list-bullets-light",
	});
}

export default Component;
