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
		"content": `<style>.tpl-ptwad {
  fill: currentColor;
  d: path("M192 24a8 8 0 0 0-8 8v8H72v-8a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-8h112v8a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8m-16 160H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16");
}
</style><path class="tpl-ptwad"/>`,
		"fallback": "ph:ladder-simple-fill",
	});
}

export default Component;
