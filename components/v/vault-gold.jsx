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
		"content": `<style>.aagrbkbyf {
  d: path("m7.796 11.588l1.143-4A1.5 1.5 0 0 1 10.381 6.5h3.238a1.5 1.5 0 0 1 1.442 1.088l1.143 4a1.5 1.5 0 0 1-1.443 1.912H9.239a1.5 1.5 0 0 1-1.443-1.912");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ul78b0b6f {
  d: path("m3.046 18.588l1.143-4A1.5 1.5 0 0 1 5.631 13.5h3.238a1.5 1.5 0 0 1 1.442 1.088l1.143 4a1.5 1.5 0 0 1-1.443 1.912H4.489a1.5 1.5 0 0 1-1.443-1.912m9.5 0l1.143-4a1.5 1.5 0 0 1 1.442-1.088h3.238a1.5 1.5 0 0 1 1.442 1.088l1.143 4a1.5 1.5 0 0 1-1.443 1.912h-5.522a1.5 1.5 0 0 1-1.443-1.912");
}
</style><g class="hntgybcog"><path class="ul78b0b6f"/><path class="aagrbkbyf"/></g>`,
		"fallback": "uix:vault-gold",
	});
}

export default Component;
