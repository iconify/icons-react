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
		"content": `<style>.nkjy85b2i {
  d: path("M19.5 12.25a8.5 8.5 0 1 0-7.25 7.25a6 6 0 0 1 7.25-7.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt_mr1boq {
  d: path("M12.75 8.75C12.5 8 11.9 7.5 11 7.5c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M11 6.25V7.5m0 6v1.25m7-.25l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L18 19.75l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><g class="ulnmmdpxh"><path class="nkjy85b2i"/><path class="vt_mr1boq"/></g>`,
		"fallback": "uix-sharp:reward-points",
	});
}

export default Component;
