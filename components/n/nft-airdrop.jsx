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

.oeqlmqbyf {
  d: path("M10.5 17.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.y0ply2bqj {
  d: path("M3.5 9.5a8.5 7 0 0 1 17 0q-4.25-1.75-8.5 0q-4.25-1.75-8.5 0m6.625 3.5h3.75a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 7.5 18.875v-3.25A2.625 2.625 0 0 1 10.125 13M3.5 9.5l4 3.5m13-3.5l-4 3.5");
}
</style><g class="hntgybcog"><path class="y0ply2bqj"/><path class="oeqlmqbyf"/></g>`,
		"fallback": "uix:nft-airdrop",
	});
}

export default Component;
