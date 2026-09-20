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
		"content": `<style>.avsermgoo {
  d: path("M6 20v-9a6 6 0 0 1 12 0v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utl7yebdg {
  d: path("m15 17 3 3 3 -3");
}
</style><g class="hntgybcog"><path class="avsermgoo"/><path class="utl7yebdg"/></g>`,
		"fallback": "iconmind:u-turn-outline-thin",
	});
}

export default Component;
