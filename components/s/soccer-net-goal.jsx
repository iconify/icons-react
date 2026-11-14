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
		"content": `<style>.g1eyjub-w {
  d: path("M7.5 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oypzkhe7l {
  d: path("M3 20V5h18v15");
}

.t7j7uj08u {
  d: path("m12.9 12.675l.246.184a1.425 1.425 0 0 1 .479 1.641l-.01.027a1.5 1.5 0 0 1-1.405.973h-.42a1.5 1.5 0 0 1-1.405-.973l-.01-.027a1.425 1.425 0 0 1 .479-1.641l.246-.184a1.5 1.5 0 0 1 1.8 0M12 12V9.5m2 4l2.25-1m-3 3l1.5 2.25m-4-2.25l-1.5 2.25M10 13.5l-2.25-1");
}
</style><g class="hntgybcog"><path class="oypzkhe7l"/><path class="g1eyjub-w"/><path class="t7j7uj08u"/></g>`,
		"fallback": "uix:soccer-net-goal",
	});
}

export default Component;
