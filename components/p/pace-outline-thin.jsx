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

.iqr3ry8kv {
  d: path("M3 19v-4h5l4 -4h4l4 4v4Z");
}

.ym_yrom4f {
  d: path("M13 2 9 6h3l-4 4");
}
</style><g class="hntgybcog"><path class="iqr3ry8kv"/><path class="ym_yrom4f"/></g>`,
		"fallback": "iconmind:pace-outline-thin",
	});
}

export default Component;
