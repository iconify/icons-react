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
		"content": `<style>.cxlphtcuw {
  d: path("M9 10h6m-6 3.5h6M9 17h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9vw8zb-m {
  d: path("M9 4.5H7.75a2 2 0 0 0-2 2v12.75a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2H15");
}

.o4dndpzsd {
  width: 6px;
  height: 3.5px;
  x: 9px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="k9vw8zb-m"/><rect class="o4dndpzsd"/><path class="cxlphtcuw"/></g>`,
		"fallback": "iconoven:stock-count",
	});
}

export default Component;
