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
		"content": `<style>.yx8qa7bmn {
  fill: currentColor;
  d: path("M216 24H72a40 40 0 0 0-40 40v72a24 24 0 0 0 24 24h48l-7.89 46.67A8.4 8.4 0 0 0 96 208a32 32 0 0 0 64 0a8.4 8.4 0 0 0-.11-1.33L152 160h48a24 24 0 0 0 24-24V32a8 8 0 0 0-8-8M72 40h104v40a8 8 0 0 0 16 0V40h16v72H48V64a24 24 0 0 1 24-24");
}
</style><path class="yx8qa7bmn"/>`,
		"fallback": "ph:paint-brush-broad-fill",
	});
}

export default Component;
