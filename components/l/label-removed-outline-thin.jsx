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

.iq8tuac7e {
  d: path("m10 11.5 4 4");
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.wo_mlccql {
  d: path("m14 11.5 -4 4");
}
</style><g class="hntgybcog"><path class="w3hyiobto"/><path class="iq8tuac7e"/><path class="wo_mlccql"/></g>`,
		"fallback": "iconmind:label-removed-outline-thin",
	});
}

export default Component;
