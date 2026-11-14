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
		"content": `<style>.jfyti6kul {
  d: path("M9.75 5.5h4.5V11h-4.5Zm2.25-3v3m-2-3h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq2bb9bpy {
  d: path("M2.5 8L4 11v10.5h16V11l1.5-3M4 11h16");
}
</style><g class="ulnmmdpxh"><path class="vq2bb9bpy"/><path class="jfyti6kul"/></g>`,
		"fallback": "uix-sharp:vaccine-box",
	});
}

export default Component;
