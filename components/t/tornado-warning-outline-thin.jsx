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
		"content": `<style>.e8vupfb9c {
  d: path("M9.5 14h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.np1vk1eeq {
  d: path("M11 17h2.5");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="hntgybcog"><path class="uweslxo3x"/><path class="s09hy0b0y"/><path class="e8vupfb9c"/><path class="np1vk1eeq"/></g>`,
		"fallback": "iconmind:tornado-warning-outline-thin",
	});
}

export default Component;
