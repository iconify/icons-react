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
		"content": `<style>.a97qfmbix {
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.dk412jbfb {
  d: path("M8 17h4");
}

.dxebngfxk {
  d: path("M8 9h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tb5ui_brh {
  d: path("M8 13h4");
}

.yegul17ht {
  d: path("M14 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="dxebngfxk"/><path class="a97qfmbix"/><path class="tb5ui_brh"/><path class="yegul17ht"/><path class="dk412jbfb"/></g>`,
		"fallback": "iconmind:secret-config-outline-thin",
	});
}

export default Component;
