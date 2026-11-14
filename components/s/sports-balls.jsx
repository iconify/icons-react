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
		"content": `<style>.fvlyeilkq {
  d: path("M11.5 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M7 7.5h10M2.75 15Q7 16.5 6 21.25m10.5-4.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kaw7ibbdn {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.pjz6otr4j {
  d: path("M2.5 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="kaw7ibbdn"/><path class="pjz6otr4j"/><path class="fvlyeilkq"/></g>`,
		"fallback": "uix:sports-balls",
	});
}

export default Component;
