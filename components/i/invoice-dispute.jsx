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
		"content": `<style>.pa_r48b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.17 18.053L13 19.5L10.5 18L8 19.5L5.75 18L3.5 19.5v-17h14v9.2M7 7h7m-7 4h4m7 3.5V18m0 3h.01");
}
</style><path class="pa_r48b9k"/>`,
		"fallback": "uix-sharp:invoice-dispute",
	});
}

export default Component;
