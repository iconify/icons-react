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
		"content": `<style>.ukpfclmwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5v-7h6V11h7v5.5h6v5ZM12 11V3m0 0h4.5L15 5l1.5 2H12Z");
}
</style><path class="ukpfclmwy"/>`,
		"fallback": "uix-sharp:race-position",
	});
}

export default Component;
