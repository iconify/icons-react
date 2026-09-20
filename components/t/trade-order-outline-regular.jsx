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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tcu89np8z {
  d: path("m13.5 11 2.5 2.5 -2.5 2.5");
}

.y71fx-j7v {
  d: path("M10.5 11 8 13.5l2.5 2.5");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}
</style><g class="nrj6p8qat"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="yqc0twwou"/><path class="y71fx-j7v"/><path class="tcu89np8z"/></g>`,
		"fallback": "iconmind:trade-order-outline-regular",
	});
}

export default Component;
