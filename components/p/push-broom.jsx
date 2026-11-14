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
		"content": `<style>.v8ckryb4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18v3.5H3Zm9 0l5.5-11.5M6 17.5V21m4-3.5V21m4-3.5V21m4-3.5V21");
}
</style><path class="v8ckryb4j"/>`,
		"fallback": "uix-sharp:push-broom",
	});
}

export default Component;
