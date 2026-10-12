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
		"content": `<style>.n0e5dqbhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h6.5v6.5h-6.5zm3.25 0V5m8.75 9.75h6.5v6.5h-6.5zm3.25 0V17M12 6h6v5.5m-2.25-2L18 11.75l2.25-2.25M12 18H6v-5.5m-2.25 2L6 12.25l2.25 2.25");
}
</style><path class="n0e5dqbhy"/>`,
		"fallback": "iconoven:supply-chain-sharp",
	});
}

export default Component;
