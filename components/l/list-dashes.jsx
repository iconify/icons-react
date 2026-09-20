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
		"content": `<style>.xd2oxldyj {
  fill: currentColor;
  d: path("M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m128 56H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16m0 64H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16M56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16");
}
</style><path class="xd2oxldyj"/>`,
		"fallback": "ph:list-dashes",
	});
}

export default Component;
