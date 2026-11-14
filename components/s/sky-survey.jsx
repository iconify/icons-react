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
		"content": `<style>.c8l3fnisj {
  d: path("M7.5 5.5L8 7l1.5.5L8 8l-.5 1.5L7 8l-1.5-.5L7 7Zm9 9L17 16l1.5.5l-1.5.5l-.5 1.5L16 17l-1.5-.5L16 16Z");
}

.hdc4j_jfs {
  d: path("M3 3h18v18H3Zm9 0v18m-9-9h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hdc4j_jfs"/><path class="c8l3fnisj"/></g>`,
		"fallback": "uix-sharp:sky-survey",
	});
}

export default Component;
