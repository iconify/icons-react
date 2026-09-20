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
		"content": `<style>.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.ivvx2hbqp {
  fill: currentColor;
  d: path("M8 10h8v4l-4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.r87-mbbox {
  d: path("M8 10h8v4l-4 4 -4 -4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="s0phu2bbs"><path class="ivvx2hbqp"/><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="r87-mbbox"/></g>`,
		"fallback": "iconmind:time-lock-duotone-bold",
	});
}

export default Component;
