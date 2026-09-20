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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o1pyalbqf {
  d: path("m8 16 2 -2 2 2 2 -2 2 2");
}

.q9p0j-bua {
  d: path("m8 11 2 -2 2 2 2 -2 2 2");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="q9p0j-bua"/><path class="o1pyalbqf"/></g>`,
		"fallback": "iconmind:watermark-ai-duotone-thin",
	});
}

export default Component;
