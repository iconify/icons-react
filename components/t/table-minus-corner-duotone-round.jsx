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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.w6a024b6c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H10v11a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z");
}

.yowmlshqa {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h4a4 4 0 0 1 4 4v1M9 20H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h4M4 9h16M4 15h5m3-11v5m1 7h8");
}
</style><g class="ft5dv1b6b"><path class="w6a024b6c"/><path class="yowmlshqa"/></g>`,
		"fallback": "coolicons:table-minus-corner-duotone-round",
	});
}

export default Component;
