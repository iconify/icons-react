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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.mv313jbqa {
  d: path("M10 11.5h4v6l-2 -2 -2 2Z");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="kpspt_bpo"/><path class="mv313jbqa"/></g>`,
		"fallback": "iconmind:saved-policy-outline-thin",
	});
}

export default Component;
