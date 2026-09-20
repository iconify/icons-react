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
		"content": `<style>.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t8vqbjbxj {
  d: path("M4 7c5 2 8 7 8 14");
}

.zsqyjcb8w {
  d: path("M20 7c-5 2 -8 7 -8 14");
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="t8vqbjbxj"/><path class="zsqyjcb8w"/></g>`,
		"fallback": "iconmind:tennis-outline-bold",
	});
}

export default Component;
