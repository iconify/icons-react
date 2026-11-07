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

.n3erqrbye {
  stroke-opacity: 0.4;
  d: path("m15 6l2 2l4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n3erqrbye"/><path class="bsyq0zp1v"/></g>`,
		"fallback": "coolicons:mail-check-duocolor-sharp",
	});
}

export default Component;
