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
		"content": `<style>.cacmi2bmi {
  d: path("M13 3H9L6 6v15h12V8");
}

.gxa8_gbhz {
  d: path("M9 17a7 7 0 0 1 7 -7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8ahhogzn {
  d: path("M12 17a4 4 0 0 1 4 -4");
}

.nxt-uwbql {
  d: path("M15 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="cacmi2bmi"/><path class="nxt-uwbql"/><path class="j8ahhogzn"/><path class="gxa8_gbhz"/></g>`,
		"fallback": "iconmind:mcp-resource-subscribe-outline-thin",
	});
}

export default Component;
