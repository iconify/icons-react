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
		"content": `<style>.faezc46_a {
  d: path("M19.75 12a3.25 3.25 0 0 1-2.25 5.5a3.25 3.25 0 0 1-5.5 2.25a3.25 3.25 0 0 1-5.5-2.25A3.25 3.25 0 0 1 4.25 12A3.25 3.25 0 0 1 6.5 6.5A3.25 3.25 0 0 1 12 4.25a3.25 3.25 0 0 1 5.5 2.25a3.25 3.25 0 0 1 2.25 5.5");
}

.g2kx7ng5b {
  fill: currentColor;
  d: path("M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tkuw4r74c {
  d: path("M15.5 14a2.25 2.25 0 0 1-3.5 2a2.25 2.25 0 0 1-3.5-2a2.25 2.25 0 0 1 0-4A2.25 2.25 0 0 1 12 8a2.25 2.25 0 0 1 3.5 2a2.25 2.25 0 0 1 0 4");
}
</style><g class="hntgybcog"><path class="faezc46_a"/><path class="tkuw4r74c"/><path class="g2kx7ng5b"/></g>`,
		"fallback": "uix:ranunculus",
	});
}

export default Component;
