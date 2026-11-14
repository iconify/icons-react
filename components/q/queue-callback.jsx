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
		"content": `<style>.e03c9gpty {
  d: path("M20.5 11V7.25a3 3 0 0 0-3-3H14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qyspmebfq {
  d: path("m16 2.25l-2 2l2 2");
}

.t_6fp3ctp {
  d: path("M20.5 5v3.5L16 10l-1.5-2C12 9 9 12 8 14.5l2 1.5l-1.5 4.5H5a2 2 0 0 1-2-2c.5-8 7.5-15 15.5-15.5a2 2 0 0 1 2 2");
}
</style><g class="hntgybcog"><path class="t_6fp3ctp"/><path class="e03c9gpty"/><path class="qyspmebfq"/></g>`,
		"fallback": "uix:queue-callback",
	});
}

export default Component;
