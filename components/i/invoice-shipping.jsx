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
		"content": `<style>.d0mxw3b9e {
  d: path("M12 12.5v1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnsh5wbfa {
  d: path("M5 3.75a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17.5l-2.33-1.5l-2.34 1.5l-2.33-1.5l-2.33 1.5l-2.34-1.5L5 21.25Zm3 3h8m-8 3h5");
}

.zz2jobbnn {
  width: 6px;
  height: 5px;
  x: 9px;
  y: 12.5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="pnsh5wbfa"/><rect class="zz2jobbnn"/><path class="d0mxw3b9e"/></g>`,
		"fallback": "iconoven:invoice-shipping",
	});
}

export default Component;
