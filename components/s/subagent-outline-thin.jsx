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

.k2jzr9u7f {
  d: path("M5 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.uyba0j-4z {
  d: path("M13 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wuegxr5di {
  d: path("m10 9 4 4");
}
</style><g class="hntgybcog"><path class="k2jzr9u7f"/><path class="uyba0j-4z"/><path class="wuegxr5di"/></g>`,
		"fallback": "iconmind:subagent-outline-thin",
	});
}

export default Component;
