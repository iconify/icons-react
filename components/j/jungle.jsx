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

.kz57_aczn {
  d: path("M12.25 16.5c0 3-1.75 4.75-4.5 4.75H3.5V5.5m0 0c0-1.5.75-2.5 2-2.5s2 .75 2 1.75S6.75 6 6.25 6");
}

.m2ggprbud {
  d: path("M12.25 16.5c-2.4.75-6-1.1-4.1-6.3c1.55-4.2 5.4-6 8.55-5.9a8.92 8.92 0 0 1 2.75 10c-1.9 5.2-5.85 4.3-7.2 2.2m-5.1-5.05l4.15-.35M9.2 7.3L13 8m7.25 5.55l-3-2.7");
}
</style><g class="hntgybcog"><path class="m2ggprbud"/><path class="kz57_aczn"/></g>`,
		"fallback": "iconoven:jungle",
	});
}

export default Component;
