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
		"content": `<style>.csyuhrrop {
  d: path("M5 14V3h14v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nreq_9ofo {
  d: path("M2 11v10h20V11L12 21Z");
}

.rt_zplbzl {
  d: path("m9 9 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="nreq_9ofo"/><path class="csyuhrrop"/><path class="rt_zplbzl"/></g>`,
		"fallback": "iconmind:invoice-paid-outline-thin",
	});
}

export default Component;
