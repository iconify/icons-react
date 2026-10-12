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
		"content": `<style>.fvtn0_xol {
  d: path("M16.4 7.25h2.85L18 12.75M7.6 7.25l-2.35-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhyo7fbce {
  d: path("M10.5 2.75h3m-5.25 3h8.5l-.22.97l-1.06 4.56l-.22.97l.16.99l1.18 7.02l.16.99h-9.5l.16-.99l1.18-7.02l.16-.99l-.22-.97l-1.06-4.56l-.22-.97zm.5 6.5h6.5");
}
</style><g class="x2cwu0gfd"><path class="xhyo7fbce"/><path class="fvtn0_xol"/></g>`,
		"fallback": "iconoven:moka-pot-sharp",
	});
}

export default Component;
