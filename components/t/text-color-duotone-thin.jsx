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
		"content": `<style>.e7x4xvbwr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 20h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1fmo_ukz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sqsxh9blm {
  d: path("M5 5h14");
}

.tklpoac2f {
  d: path("M12 5v10");
}

.ui32hib9b {
  d: path("M5 20h14");
}

.uprf-9awp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 5h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="uprf-9awp"/><path class="i1fmo_ukz"/><path class="e7x4xvbwr"/><path class="sqsxh9blm"/><path class="tklpoac2f"/><path class="ui32hib9b"/></g>`,
		"fallback": "iconmind:text-color-duotone-thin",
	});
}

export default Component;
