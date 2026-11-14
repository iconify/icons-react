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
		"content": `<style>.dofyk9bdo {
  d: path("M2.5 8v7a9.5 4 0 0 0 19 0V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltobpr_4q {
  d: path("M8.5 8a3.5 1.25 0 1 0 7 0a3.5 1.25 0 1 0-7 0m-3.25 2.75v2.75M12 12v3.5m6.75-4.75v2.75");
}

.vh0yo0b2j {
  d: path("M2.5 8a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="vh0yo0b2j"/><path class="dofyk9bdo"/><path class="ltobpr_4q"/></g>`,
		"fallback": "uix:king-cake",
	});
}

export default Component;
