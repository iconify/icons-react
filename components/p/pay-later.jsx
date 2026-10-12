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
		"content": `<style>.cd6rv5bwo {
  d: path("M11.75 18.75h-6.5a2.5 2.5 0 0 1-2.5-2.5v-8.5a2.5 2.5 0 0 1 2.5-2.5h13.5a2.5 2.5 0 0 1 2.5 2.5v3.5m-18.5-2h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwt9vubhj {
  d: path("M17 14.75V17h2");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}
</style><g class="hntgybcog"><path class="cd6rv5bwo"/><circle class="upu83lbfh"/><path class="kwt9vubhj"/></g>`,
		"fallback": "iconoven:pay-later",
	});
}

export default Component;
