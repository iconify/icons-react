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

.hspeesv2z {
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
}

.mu4i3ybkf {
  d: path("m10 11 2 -2 2 2");
}

.p6gr82bvc {
  d: path("m10 8 2 -2 2 2");
}

.tv6hbrcra {
  d: path("M8.5 20.5h7");
}

.ujt25lh2u {
  d: path("M12 15v5.5");
}
</style><g class="hntgybcog"><path class="hspeesv2z"/><path class="ujt25lh2u"/><path class="tv6hbrcra"/><path class="p6gr82bvc"/><path class="mu4i3ybkf"/></g>`,
		"fallback": "iconmind:raise-goal-outline-thin",
	});
}

export default Component;
