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
		"content": `<style>.gf9-j-b4n {
  d: path("M8 2.75h8l-2.5 6.5h-3Zm4 9.75l.882 1.786l1.971.287l-1.426 1.391l.336 1.963L12 17l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287Z");
}

.jl8d7ubxv {
  d: path("M6 15.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jl8d7ubxv"/><path class="gf9-j-b4n"/></g>`,
		"fallback": "uix-sharp:volunteer-award",
	});
}

export default Component;
