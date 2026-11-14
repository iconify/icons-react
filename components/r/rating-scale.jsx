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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oexsrccxy {
  fill: currentColor;
  d: path("M7.75 14L6.5 20l5.5-3l5.5 3l-1.25-6Z");
}

.skio7kbow {
  d: path("m13.323 6.055l.971 2.06a1.5 1.5 0 0 0 1.168.848l2.259.288a1.462 1.462 0 0 1 .818 2.515l-1.66 1.561a1.5 1.5 0 0 0-.446 1.372l.425 2.238a1.462 1.462 0 0 1-2.139 1.555l-1.997-1.096a1.5 1.5 0 0 0-1.444 0l-1.997 1.096a1.462 1.462 0 0 1-2.139-1.555l.425-2.238a1.5 1.5 0 0 0-.446-1.372l-1.66-1.561a1.462 1.462 0 0 1 .818-2.515l2.259-.288a1.5 1.5 0 0 0 1.168-.848l.971-2.06a1.462 1.462 0 0 1 2.646 0");
}
</style><g class="hntgybcog"><path class="skio7kbow"/><path class="oexsrccxy"/></g>`,
		"fallback": "uix:rating-scale",
	});
}

export default Component;
