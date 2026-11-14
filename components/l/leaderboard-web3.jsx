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
		"content": `<style>.dpe6telcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V16H8v-4.5h8V14h5.5v7.5ZM8 16v5.5m8-7.5v7.5M12 2l2.815 1.625v3.25L12 8.5L9.185 6.875v-3.25Z");
}
</style><path class="dpe6telcb"/>`,
		"fallback": "uix-sharp:leaderboard-web3",
	});
}

export default Component;
