import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ag2pjy3mn {
  fill: currentColor;
  d: path("m20.39 8.56l-1.24 1.86a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.86-1.24A10 10 0 0 0 4 20h16a10 10 0 0 0 .38-11.44z");
}

.xa7tlw86o {
  fill: currentColor;
  d: path("M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49l-8.49 5.66a2 2 0 0 0 0 2.83");
}
</style><path class="ag2pjy3mn"/><path class="xa7tlw86o"/>`,
		"fallback": "ic:sharp-speed",
	});
}

export default Component;
