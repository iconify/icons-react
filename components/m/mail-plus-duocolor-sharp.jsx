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
		"content": `<style>.bsyq0zp1v {
  d: path("M21 13v6H3V5h8M3 5l6 6h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pnc_lns1w {
  stroke-opacity: 0.4;
  d: path("M15 6h6m-3-3v6");
}
</style><g class="nrj6p8qat"><path class="pnc_lns1w"/><path class="bsyq0zp1v"/></g>`,
		"fallback": "coolicons:mail-plus-duocolor-sharp",
	});
}

export default Component;
