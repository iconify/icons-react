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

.u54fl1bcd {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M12 2.5v3");
}

.vk9hti-iz {
  d: path("m8.75 17.5l3.25-9l3.25 9M10 14.25h4");
}
</style><g class="hntgybcog"><path class="u54fl1bcd"/><path class="vk9hti-iz"/></g>`,
		"fallback": "uix:mode-aperture-priority",
	});
}

export default Component;
