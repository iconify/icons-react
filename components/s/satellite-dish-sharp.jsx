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
		"content": `<style>.f0dr7cczp {
  d: path("M5.25 8L16 18.75A7.6 7.6 0 0 1 5.25 8Zm5.38 5.38L14 10");
}

.ha_6x11ur {
  cx: 14.75px;
  cy: 9.25px;
  r: 1.25px;
}

.ofm-p1bym {
  d: path("M16.25 5.5H19v2.75M16.25 3a5 5 0 0 1 5 5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f0dr7cczp"/><circle class="ha_6x11ur"/><path class="ofm-p1bym"/></g>`,
		"fallback": "iconoven:satellite-dish-sharp",
	});
}

export default Component;
