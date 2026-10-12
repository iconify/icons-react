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
		"content": `<style>.dqeji9_-y {
  cx: 16px;
  cy: 15.5px;
  r: 2.5px;
}

.hsr8babyg {
  cx: 8px;
  cy: 15.5px;
  r: 2.5px;
}

.j60y2_bjy {
  d: path("M12 4.5v7m-2-2l2 2l2-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hsr8babyg"/><circle class="dqeji9_-y"/><path class="j60y2_bjy"/></g>`,
		"fallback": "iconoven:pinch-point-sharp",
	});
}

export default Component;
