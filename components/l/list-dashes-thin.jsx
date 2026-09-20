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
		"content": `<style>.ok95hpbxv {
  fill: currentColor;
  d: path("M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8m0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8M56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8");
}
</style><path class="ok95hpbxv"/>`,
		"fallback": "ph:list-dashes-thin",
	});
}

export default Component;
