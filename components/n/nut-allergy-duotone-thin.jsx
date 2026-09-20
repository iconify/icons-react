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
		"content": `<style>.af8xzachr {
  d: path("M6 19 18 7");
}

.d61-nrbot {
  fill: currentColor;
  d: path("M12 3c4 3 6 7 6 11a6 6 0 0 1 -12 0c0 -4 2 -8 6 -11");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tbr5-0t2d {
  d: path("M12 3c4 3 6 7 6 11a6 6 0 0 1 -12 0c0 -4 2 -8 6 -11");
}
</style><g class="hntgybcog"><path class="d61-nrbot"/><path class="tbr5-0t2d"/><path class="af8xzachr"/></g>`,
		"fallback": "iconmind:nut-allergy-duotone-thin",
	});
}

export default Component;
