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
		"content": `<style>.tus49qbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm0 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm14-7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM5 7v10M7.25 5.75l9.5 5m-9.5 7.5l9.5-5");
}
</style><path class="tus49qbwk"/>`,
		"fallback": "uix-sharp:neural-network",
	});
}

export default Component;
