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
		"content": `<style>.tsr2e1pai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V8m12 13V8M3 8q9 3 18 0M4.5 13h15M12 9.5V13");
}
</style><path class="tsr2e1pai"/>`,
		"fallback": "uix-sharp:torii-gate",
	});
}

export default Component;
