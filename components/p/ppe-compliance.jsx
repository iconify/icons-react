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
		"content": `<style>.e53g5accw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12.5a7.5 7.5 0 0 1 15 0M12.8 16H2.5v-3.5h17.8M12 5v4m2.75 9l2 2L21 15.75");
}
</style><path class="e53g5accw"/>`,
		"fallback": "uix-sharp:ppe-compliance",
	});
}

export default Component;
