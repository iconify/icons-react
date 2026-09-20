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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.c4uh67boo {
  d: path("M13.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.g45hqpb0s {
  d: path("M10.5 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.txy3rzbds {
  d: path("M6.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="a218-cpca"/><path class="txy3rzbds"/><path class="c4uh67boo"/><path class="g45hqpb0s"/></g>`,
		"fallback": "iconmind:sso-session-outline-thin",
	});
}

export default Component;
