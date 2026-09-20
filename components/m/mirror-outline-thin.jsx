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

.m7p35uguv {
  d: path("M12 17v3");
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.zawn-gbuw {
  d: path("M6 10a6 7 0 1 1 12 0 6 7 0 1 1 -12 0");
}
</style><g class="hntgybcog"><path class="zawn-gbuw"/><path class="m7p35uguv"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:mirror-outline-thin",
	});
}

export default Component;
