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
		"content": `<style>.jfp291brm {
  d: path("M2.75 2.75h8v8h-8z");
}

.ozy1wf4nb {
  d: path("M16.5 2.75h4.75V7.5m-18.5 9v4.75H7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="x2cwu0gfd"><path class="jfp291brm"/><circle class="ygphxfbhc"/><path class="ozy1wf4nb"/></g>`,
		"fallback": "iconoven:ungroup-sharp",
	});
}

export default Component;
