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
		"content": `<style>.a0e2epbbx {
  d: path("M4 13v7h16v-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.us2evabuy {
  d: path("M12 5.5V8");
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="hntgybcog"><path class="zugrvnb7t"/><path class="a0e2epbbx"/><path class="ltriwmbuu"/><path class="us2evabuy"/></g>`,
		"fallback": "iconmind:reception-desk-outline-thin",
	});
}

export default Component;
