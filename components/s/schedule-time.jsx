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
		"content": `<style>.gjywqg0ox {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M12 2.5v2m9.5 7.5h-2M12 21.5v-2M2.5 12h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ur4_zxypb {
  d: path("M12 7.5V12h3.5");
}
</style><g class="hntgybcog"><path class="gjywqg0ox"/><path class="ur4_zxypb"/></g>`,
		"fallback": "uix:schedule-time",
	});
}

export default Component;
