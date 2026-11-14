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
		"content": `<style>.hj-t_6n8w {
  d: path("M5.5 9.5h13v12h-13Zm4 0a2.5 2.5 0 0 1 5 0");
}

.p1ed09bpy {
  d: path("M9 17.5a3 3 0 0 1 6 0m-3 0l1.25-1.75M12 2.5v1.75M7 4l1.5 1.5M17 4l-1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hj-t_6n8w"/><path class="p1ed09bpy"/></g>`,
		"fallback": "uix-sharp:light-meter",
	});
}

export default Component;
