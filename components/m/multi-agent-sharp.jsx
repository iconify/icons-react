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
		"content": `<style>.r2ubc0bcq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.25h8v9h-8zm10.5 0h8v9h-8z");
}

.txx_49nln {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 7.5l-2 2.75m5.5-2.75l2 2.75M12 2.75l.3 2.2l2.2.3l-2.2.3l-.3 2.2l-.3-2.2l-2.2-.3l2.2-.3z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vfnk_yb5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 14.5h.01m2.99 0h.01m7.49 0h.01m2.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="r2ubc0bcq"/><path class="vfnk_yb5j"/><path class="txx_49nln"/></g>`,
		"fallback": "iconoven:multi-agent-sharp",
	});
}

export default Component;
