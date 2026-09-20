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

.l8dn9jbyp {
  d: path("M2 15h20");
}

.olqfcgidt {
  d: path("M6 19h12");
}

.y006j0y9x {
  d: path("M6 15a6 6 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="l8dn9jbyp"/><path class="y006j0y9x"/><path class="olqfcgidt"/></g>`,
		"fallback": "iconmind:sunhat-outline-thin",
	});
}

export default Component;
