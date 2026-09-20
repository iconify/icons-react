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
		"content": `<style>.mgaii8b9z {
  fill: currentColor;
  d: path("m202.83 58.83l-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.66M68 112a4 4 0 0 0 8 0V76h36a4 4 0 0 0 0-8H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36Zm156 68h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8");
}
</style><path class="mgaii8b9z"/>`,
		"fallback": "ph:plus-minus-thin",
	});
}

export default Component;
