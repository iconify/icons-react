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
		"content": `<style>.dn1egm5la {
  d: path("m10 17 6 -6 6 6");
}

.e84dr_enj {
  d: path("m2 7 6 6 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqfv9rb9x {
  d: path("M2 21h20");
}
</style><g class="hntgybcog"><path class="e84dr_enj"/><path class="dn1egm5la"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:valley-outline-thin",
	});
}

export default Component;
