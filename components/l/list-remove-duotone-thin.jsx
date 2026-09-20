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
		"content": `<style>.cw0e2h_ie {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jk6bn7bej {
  d: path("M15.5 12h6");
}

.ldkstzszf {
  d: path("M3 16h11");
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.o7gb3jb7q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15.5 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.uzf676bdq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w95bfobed {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="w95bfobed"/><path class="uzf676bdq"/><path class="cw0e2h_ie"/><path class="o7gb3jb7q"/><path class="nrqy16b7j"/><path class="qnmmmsbha"/><path class="ldkstzszf"/><path class="jk6bn7bej"/></g>`,
		"fallback": "iconmind:list-remove-duotone-thin",
	});
}

export default Component;
