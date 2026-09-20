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
		"content": `<style>.jccl4ybtj {
  fill: currentColor;
  d: path("M108 92a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 36a28 28 0 1 0 28 28a28 28 0 0 0-28-28m88-88v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-44 116a44 44 0 0 0-20.23-37a36 36 0 1 0-47.54 0A44 44 0 1 0 172 156");
}
</style><path class="jccl4ybtj"/>`,
		"fallback": "ph:number-eight-fill",
	});
}

export default Component;
