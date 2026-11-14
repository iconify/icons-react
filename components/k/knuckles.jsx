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
		"content": `<style>.tfp0hbb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a2.25 2.25 0 0 1 4.5 0A2.25 2.25 0 0 1 12 7a2.25 2.25 0 0 1 4.5 0A2.25 2.25 0 0 1 21 7v8c0 3-2.5 5-5.5 5h-7c-3 0-5.5-2-5.5-5Zm4.5 0v3.5M12 7v3.5M16.5 7v3.5M3 14h9.5");
}
</style><path class="tfp0hbb2b"/>`,
		"fallback": "uix-sharp:knuckles",
	});
}

export default Component;
