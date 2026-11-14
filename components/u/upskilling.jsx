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
		"content": `<style>.teselob-y {
  d: path("M2.5 21.5v-3.75H10V14h11.5v7.5ZM15.763 3.328l.138-1.038h1.198l.138 1.038l1.162.482l.831-.637l.847.847l-.637.831l.482 1.162l1.038.138v1.198l-1.038.138l-.482 1.162l.637.831l-.847.847l-.831-.637l-1.162.482l-.138 1.038h-1.198l-.138-1.038l-1.162-.482l-.831.637l-.847-.847l.637-.831l-.482-1.162l-1.038-.138V6.151l1.038-.138l.482-1.162l-.637-.831l.847-.847l.831.637Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrhpy0bko {
  d: path("M15.75 6.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="teselob-y"/><path class="yrhpy0bko"/></g>`,
		"fallback": "uix-sharp:upskilling",
	});
}

export default Component;
