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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mg7w6vb1w {
  d: path("M14.31 18.59a6.75 6.75 0 0 0 .86-12.3");
}

.oi4oy-5vs {
  d: path("M7.48 17.27q-1.61-1.56-3.32-.12q1.61 1.56 3.32.12m-1.9-2.93q-.62-2.16-2.82-1.77q.61 2.16 2.82 1.77m-.18-3.49q.54-2.18-1.57-2.94q-.54 2.17 1.57 2.94m1.58-3.12q1.56-1.61.12-3.32q-1.56 1.61-.12 3.32m1.77 13.52L12 19l3.25 2.25");
}

.xn8_gzbev {
  d: path("M16.52 17.27q1.71 1.44 3.32-.12q-1.71-1.44-3.32.12m1.9-2.93q2.21.39 2.82-1.77q-2.2-.39-2.82 1.77m.18-3.49q2.11-.77 1.57-2.94q-2.11.76-1.57 2.94m-1.58-3.12q1.44-1.71-.12-3.32q-1.44 1.71.12 3.32M9.69 18.59a6.75 6.75 0 0 1-.86-12.3");
}
</style><g class="hntgybcog"><path class="mg7w6vb1w"/><path class="xn8_gzbev"/><path class="oi4oy-5vs"/></g>`,
		"fallback": "iconoven:laurel-wreath",
	});
}

export default Component;
