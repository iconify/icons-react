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
		"content": `<style>.cywk_tlzr {
  d: path("M9 4.5A3.25 3.25 0 0 1 9 9m6-4.5A3.25 3.25 0 0 0 15 9");
}

.esbxtih9c {
  d: path("M8.25 6.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M12 10.5v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9gbddamb {
  d: path("M3 21V10.5h18V21M3 17.5h18");
}
</style><g class="hntgybcog"><path class="k9gbddamb"/><path class="esbxtih9c"/><path class="cywk_tlzr"/></g>`,
		"fallback": "uix:tennis-let",
	});
}

export default Component;
