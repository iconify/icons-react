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
		"content": `<style>.cpn0deb-j {
  d: path("M2.5 10.75a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m7.25 0a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0M7.5 7.5l-.75-1m2 1l1-1M5.5 12.75H11M5.75 15h4.75m7-10.5h.01M21 9h.01M17 12h.01m3.49 4.5h.01M16.5 20h.01");
}

.cz97c6a1n {
  d: path("M7 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.dkkaw6bpy {
  d: path("M5.5 13.5a2.75 3.75 0 1 0 5.5 0a2.75 3.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cz97c6a1n"/><path class="dkkaw6bpy"/><path class="cpn0deb-j"/></g>`,
		"fallback": "uix:swarm",
	});
}

export default Component;
