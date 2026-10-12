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
		"content": `<style>.clhdcdczn {
  d: path("M5.75 12.5V5.25a2.5 2.5 0 0 1 2.5-2.5h7.5a2.5 2.5 0 0 1 2.5 2.5v7.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_b_1zbbn {
  d: path("M12 5.25v3.5M10.25 7L12 8.75L13.75 7");
}

.oqts0u5ld {
  width: 12.5px;
  height: 10.25px;
  x: 5.75px;
  y: 11px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="clhdcdczn"/><rect class="oqts0u5ld"/><path class="m_b_1zbbn"/></g>`,
		"fallback": "iconoven:one-hand-mode",
	});
}

export default Component;
