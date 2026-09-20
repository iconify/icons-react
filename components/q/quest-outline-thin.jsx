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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pt-3kkb2k {
  d: path("M9 11h6");
}

.wx7ogdbqc {
  d: path("M6 4v16h12V4Z");
}

.xug64tbnj {
  d: path("M6 4C4 4 4 8 6 8");
}
</style><g class="hntgybcog"><path class="wx7ogdbqc"/><path class="xug64tbnj"/><path class="pt-3kkb2k"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:quest-outline-thin",
	});
}

export default Component;
