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
		"content": `<style>.c_w47e8ds {
  d: path("M12 14.75V8.5l4 3.5h-4m-5.5 2.75h11l-1.75 2.75h-7.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr48kkoan {
  d: path("m4.241 8.977l6.75-4.765a1.75 1.75 0 0 1 2.018 0l6.75 4.765a1.75 1.75 0 0 1 .741 1.43v8.343a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.343a1.75 1.75 0 0 1 .741-1.43");
}
</style><g class="hntgybcog"><path class="wr48kkoan"/><path class="c_w47e8ds"/></g>`,
		"fallback": "uix:maritime-museum",
	});
}

export default Component;
