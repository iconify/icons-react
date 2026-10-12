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
		"content": `<style>.dmfpm2rbl {
  d: path("M11.75 18.75h-9V5.25h18.5v6m-18.5-2h18.5");
}

.kwt9vubhj {
  d: path("M17 14.75V17h2");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dmfpm2rbl"/><circle class="upu83lbfh"/><path class="kwt9vubhj"/></g>`,
		"fallback": "iconoven:pay-later-sharp",
	});
}

export default Component;
