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
		"content": `<style>.asi31ng8t {
  fill: currentColor;
  d: path("M4.5 7.75h15a1.5 1.5 0 0 1 1.5 1.5v.25a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 9.5v-.25a1.5 1.5 0 0 1 1.5-1.5m0 6.5h15a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16v-.25a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}

.vic6c766r {
  d: path("M10 3v4.75M10 11v3.25m0 3.25V21");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="asi31ng8t"/><path class="vic6c766r"/></g>`,
		"fallback": "uix:table-zebra",
	});
}

export default Component;
