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
		"content": `<style>.pyh7ymh4h {
  d: path("M2.5 5H15l6.5 7l-6.5 7H2.5ZM16 12h.01");
}

.qifilrr3z {
  d: path("M6 15.5v-7l5 7v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pyh7ymh4h"/><path class="qifilrr3z"/></g>`,
		"fallback": "uix-sharp:tag-new",
	});
}

export default Component;
