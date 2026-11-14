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
		"content": `<style>.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}

.rb39rgb4t {
  d: path("m7 9l5 3.5L17 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r21jxhxfq"/><path class="rb39rgb4t"/></g>`,
		"fallback": "uix-sharp:mail",
	});
}

export default Component;
