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
		"content": `<style>.lojoc6byk {
  d: path("M6 20v-3L16 7l3 3L9 20zm8-11l3 3");
}

.n2x1j6b-n {
  stroke-opacity: 0.4;
  d: path("M4 7h6M7 4v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n2x1j6b-n"/><path class="lojoc6byk"/></g>`,
		"fallback": "coolicons:pencil-plus-duocolor-sharp",
	});
}

export default Component;
