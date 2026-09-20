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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok2vcf7lv {
  d: path("M13.5 10 11 12.5h2.5L11 15");
}
</style><g class="nrj6p8qat"><path class="b5ic9acln"/><path class="ok2vcf7lv"/></g>`,
		"fallback": "iconmind:retrieval-cache-outline-regular",
	});
}

export default Component;
