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
		"content": `<style>.a0x7qs0dl {
  d: path("m18.25 18l3 3");
}

.c1myp4vea {
  cx: 16px;
  cy: 15.75px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlkpmjb6r {
  d: path("M10.25 17.25h-5a2.5 2.5 0 0 1-2.5-2.5v-5.5a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 2.5 2.5v1m-10-3.5v-1.5a1.5 1.5 0 0 1 1.5-1.5h2.5a1.5 1.5 0 0 1 1.5 1.5v1.5");
}
</style><g class="hntgybcog"><path class="jlkpmjb6r"/><circle class="c1myp4vea"/><path class="a0x7qs0dl"/></g>`,
		"fallback": "iconoven:job-search",
	});
}

export default Component;
