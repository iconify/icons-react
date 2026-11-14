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

.k7n-sz5ny {
  d: path("M7 7h10v13q0 1.5-1.5 1.5h-7Q7 21.5 7 20Zm5.5 0a3.5 3.5 0 0 1 7 0M10 10.5l-1.5-8");
}

.lkwt-rb2o {
  d: path("m11.979 13.945l.978.208a1.75 1.75 0 0 1 1.348 2.076l-.208.978a1.75 1.75 0 0 1-2.076 1.348l-.978-.208a1.75 1.75 0 0 1-1.348-2.076l.208-.978a1.75 1.75 0 0 1 2.076-1.348");
}
</style><g class="hntgybcog"><path class="k7n-sz5ny"/><path class="lkwt-rb2o"/></g>`,
		"fallback": "uix:mocktail",
	});
}

export default Component;
