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
		"content": `<style>.n9hvscbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v12H3Zm9 12l-5 6.5m5-6.5l5 6.5M12 15v6.5M8 12V9.5m4 2.5V6m4 6V8");
}
</style><path class="n9hvscbma"/>`,
		"fallback": "uix-sharp:presentation-screen",
	});
}

export default Component;
