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
		"content": `<style>.pysuuf1xp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.476 4.871l2.911-.725l3.024 12.128L5.5 17ZM3.5 17h17v3.5h-17Z");
}
</style><path class="pysuuf1xp"/>`,
		"fallback": "uix-sharp:laptop-open-side",
	});
}

export default Component;
