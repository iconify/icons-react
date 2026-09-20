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
		"content": `<style>.gashr7bir {
  d: path("m8 13 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jsqnf3b1y {
  d: path("m8 17 3 3 3 -3");
}

.nww9z02wt {
  fill: currentColor;
  d: path("M6 8v13h10V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pwvj2zbau {
  d: path("M5 8V5h12v3");
}

.rh6cspb3h {
  d: path("M6 8v13h10V8Z");
}
</style><g class="hntgybcog"><path class="nww9z02wt"/><path class="rh6cspb3h"/><path class="pwvj2zbau"/><path class="gashr7bir"/><path class="jsqnf3b1y"/></g>`,
		"fallback": "iconmind:recycling-day-duotone-thin",
	});
}

export default Component;
