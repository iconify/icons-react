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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7-7k5bqs {
  d: path("M9.5 8.5 12 6l2.5 2.5");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="lhfoj2bfk"/><path class="o7-7k5bqs"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:response-body-outline-regular",
	});
}

export default Component;
