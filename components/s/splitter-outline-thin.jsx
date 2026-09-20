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
		"content": `<style>.fyyr_6-1m {
  d: path("m10 12 4 -4h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.ue-dwjbmw {
  d: path("m10 12 4 4h7");
}
</style><g class="hntgybcog"><path class="jcxg2bbvb"/><path class="fyyr_6-1m"/><path class="ue-dwjbmw"/></g>`,
		"fallback": "iconmind:splitter-outline-thin",
	});
}

export default Component;
