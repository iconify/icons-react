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
		"content": `<style>.emx5mackx {
  d: path("M3 11.5q9 3 18 0");
}

.spjyovp4g {
  d: path("M3 7q9 3 18 0v9q-9 3-18 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="spjyovp4g"/><path class="emx5mackx"/></g>`,
		"fallback": "uix-sharp:tennis-wristband",
	});
}

export default Component;
