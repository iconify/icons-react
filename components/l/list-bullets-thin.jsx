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
		"content": `<style>.oeeeuqb5z {
  fill: currentColor;
  d: path("M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4m132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8M44 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-64a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 128a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="oeeeuqb5z"/>`,
		"fallback": "ph:list-bullets-thin",
	});
}

export default Component;
