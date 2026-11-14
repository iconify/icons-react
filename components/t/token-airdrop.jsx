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
		"content": `<style>.pz4_e9a_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10a9 7.5 0 0 1 18 0Zm0 0l6 5m12-5l-6 5m-7 2.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-1.25v2.5");
}
</style><path class="pz4_e9a_u"/>`,
		"fallback": "uix:token-airdrop",
	});
}

export default Component;
