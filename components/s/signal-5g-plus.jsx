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
		"content": `<style>.gdx81mjai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-2.5M7 21v-5m4 5v-7.5m4 7.5v-9.5m3.5-9v6m-3-3h6");
}
</style><path class="gdx81mjai"/>`,
		"fallback": "uix:signal-5g-plus",
	});
}

export default Component;
