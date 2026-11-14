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
		"content": `<style>.v119k741e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3L3.5 6v15h17V6L16 3l-4 7Zm4 7v11m2.75-6.5h3");
}
</style><path class="v119k741e"/>`,
		"fallback": "uix-sharp:lab-coat",
	});
}

export default Component;
