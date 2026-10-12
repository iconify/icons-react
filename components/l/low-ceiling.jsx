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
		"content": `<style>.eh93ce48m {
  d: path("M2.75 4.5h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ojw7pnbmt {
  d: path("m10.75 11.5l3.25 3l-2.5 2.75l.5 3.25m2-6l1.75 3.25l-.5 2.75m-3.5-8.25L9.5 15M18 7.5V14m-2-2l2 2l2-2");
}

.xkkdsjxsn {
  cx: 9.5px;
  cy: 9.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="eh93ce48m"/><circle class="xkkdsjxsn"/><path class="ojw7pnbmt"/></g>`,
		"fallback": "iconoven:low-ceiling",
	});
}

export default Component;
