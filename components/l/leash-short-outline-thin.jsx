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
		"content": `<style>.gtsw5xviq {
  d: path("M17 5v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oe2rn1bbo {
  d: path("M14 12h3");
}

.zqoml3bvy {
  d: path("M11.11 7.47a5 5 0 1 1 -4.22 0");
}
</style><g class="hntgybcog"><path class="zqoml3bvy"/><path class="oe2rn1bbo"/><path class="gtsw5xviq"/></g>`,
		"fallback": "iconmind:leash-short-outline-thin",
	});
}

export default Component;
