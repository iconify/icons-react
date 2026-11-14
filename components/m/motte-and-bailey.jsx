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
		"content": `<style>.nvz21mbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c2.5-6.5 5.5-8 9.5-8s7 1.5 9.5 8m-19 0h19m-13-8v-9h2v2h3v-2h2v9");
}
</style><path class="nvz21mbda"/>`,
		"fallback": "uix:motte-and-bailey",
	});
}

export default Component;
