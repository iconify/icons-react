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
		"content": `<style>.o-wuil6dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v10h-13Zm6.5 10v6m-2 0h4l-2 2.75Z");
}
</style><path class="o-wuil6dm"/>`,
		"fallback": "uix-sharp:piste-marker",
	});
}

export default Component;
