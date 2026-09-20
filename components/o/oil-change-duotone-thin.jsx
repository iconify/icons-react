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

.qik8460ao {
  d: path("M5 21h14");
}

.s7tma7b6z {
  fill: currentColor;
  d: path("M12 2.5 16.5 7a6.5 6.5 0 1 1 -9 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x8a73k51x {
  d: path("M12 2.5 16.5 7a6.5 6.5 0 1 1 -9 0Z");
}
</style><g class="hntgybcog"><path class="s7tma7b6z"/><path class="x8a73k51x"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:oil-change-duotone-thin",
	});
}

export default Component;
