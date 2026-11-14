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
		"content": `<style>.e7wfn42cy {
  d: path("M3 21.5V3h4v18.5m2.5 0v-12h3v12m-10 0h10m3-6.75h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}
</style><g class="hntgybcog"><path class="e7wfn42cy"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix:treasury-ageing",
	});
}

export default Component;
