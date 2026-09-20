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
		"content": `<style>.t81yqh3jp {
  fill: currentColor;
  d: path("M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4M36 108h48v40H36Zm56 0h128v40H92Zm128-48v40H36V60ZM36 192v-36h48v40H40a4 4 0 0 1-4-4m180 4H92v-40h128v36a4 4 0 0 1-4 4");
}
</style><path class="t81yqh3jp"/>`,
		"fallback": "ph:table-thin",
	});
}

export default Component;
