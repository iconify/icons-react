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
		"content": `<style>.gh1jtrbuw {
  d: path("M9.5 12 12 9.5l2.5 2.5");
}

.hk697hhuu {
  d: path("M15.38 6.75a8 8 0 1 1 -6.76 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1iuej2mt {
  d: path("m9.5 16 2.5 2.5 2.5 -2.5");
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="hntgybcog"><path class="hk697hhuu"/><path class="yazo7scbq"/><path class="jms1xqp8l"/><path class="gh1jtrbuw"/><path class="j1iuej2mt"/></g>`,
		"fallback": "iconmind:time-picker-outline-thin",
	});
}

export default Component;
