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
		"content": `<style>.l57ozh_fr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 12.25h.01m3.99 0h.01M10 16h.01M14 16h.01");
}

.ui70-tr_j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h9.5v18.5h-9.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zz9p51bci {
  cx: 12px;
  cy: 7px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="ui70-tr_j"/><circle class="zz9p51bci"/><path class="l57ozh_fr"/></g>`,
		"fallback": "iconoven:remote-sharp",
	});
}

export default Component;
