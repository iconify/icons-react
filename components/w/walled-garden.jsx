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
		"content": `<style>.sp51x4bfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19v7.5h-19Zm4-2.75L12 2.5l5.5 8.75Zm5.5 0V14m-9.5 3.75h19M8 14v3.75m8 0v3.75");
}
</style><path class="sp51x4bfc"/>`,
		"fallback": "uix-sharp:walled-garden",
	});
}

export default Component;
