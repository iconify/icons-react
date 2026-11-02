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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqbmi0b8v {
  d: path("M7 17c7 4 13-1 12-12C8 4 3 10 7 17");
}

.qrfn1bbya {
  stroke-opacity: 0.4;
  d: path("M6 20c.1-.7.4-1.8 1-3m0 0c1.6-2.4 3.4-4.4 6-6");
}
</style><g class="nrj6p8qat"><path class="qrfn1bbya"/><path class="oqbmi0b8v"/></g>`,
		"fallback": "coolicons:leaf-duocolor-sharp",
	});
}

export default Component;
