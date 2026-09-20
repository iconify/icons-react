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
		"content": `<style>.c9ga8t7-s {
  d: path("M11 11.5a2 2 0 0 1 -4 0");
}

.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.dy9tza2iq {
  d: path("M8 10.5h8");
}

.f-5fmfwpk {
  d: path("M17 11.5a2 2 0 0 1 -4 0");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7qu5ueqh {
  d: path("M12 12v4.5");
}
</style><g class="hntgybcog"><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="dy9tza2iq"/><path class="k7qu5ueqh"/><path class="c9ga8t7-s"/><path class="f-5fmfwpk"/></g>`,
		"fallback": "iconmind:judge-rubric-outline-thin",
	});
}

export default Component;
