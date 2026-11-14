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
		"content": `<style>.a95nfqbqv {
  d: path("M3.5 9.5H16L20.5 5M16 9.5v11M7.5 14H12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kd-yu0b6r {
  d: path("M3.5 9.5L8 5h12.5v11L16 20.5H3.5Z");
}
</style><g class="hntgybcog"><path class="kd-yu0b6r"/><path class="a95nfqbqv"/></g>`,
		"fallback": "uix:plyo-box",
	});
}

export default Component;
