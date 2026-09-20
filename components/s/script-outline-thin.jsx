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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.f6g4tkbvw {
  d: path("m9 9 3 3 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcumd0bgs {
  d: path("M8 17h6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="f6g4tkbvw"/><path class="lcumd0bgs"/></g>`,
		"fallback": "iconmind:script-outline-thin",
	});
}

export default Component;
