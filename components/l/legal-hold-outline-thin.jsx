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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6od16bab {
  d: path("M10 8v8");
}

.st-dlsdww {
  d: path("M14 8v8");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="k6od16bab"/><path class="st-dlsdww"/></g>`,
		"fallback": "iconmind:legal-hold-outline-thin",
	});
}

export default Component;
