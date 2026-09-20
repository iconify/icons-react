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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.lhfoj2bfk {
  d: path("M12 6v4.5");
}

.o7-7k5bqs {
  d: path("M9.5 8.5 12 6l2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="lhfoj2bfk"/><path class="o7-7k5bqs"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:response-body-outline-bold",
	});
}

export default Component;
