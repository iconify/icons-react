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
		"content": `<style>.mbdl7zbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 21.5H3.5v-19h15v11.1M7 7h7.5M7 11h4.5m4 4.5l5 5m0-5l-5 5");
}
</style><path class="mbdl7zbbd"/>`,
		"fallback": "uix-sharp:proposal-rejected",
	});
}

export default Component;
