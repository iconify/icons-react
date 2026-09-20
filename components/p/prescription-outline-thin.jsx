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

.mv-66-b-n {
  d: path("m7 17 4 -4a2.5 2.5 0 0 1 3.5 3.5l-4 4A2.5 2.5 0 0 1 7 17");
}

.t-ht_no5g {
  d: path("M4 3h14l4 4v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2m14 0v4h4");
}
</style><g class="hntgybcog"><path class="t-ht_no5g"/><path class="mv-66-b-n"/></g>`,
		"fallback": "iconmind:prescription-outline-thin",
	});
}

export default Component;
