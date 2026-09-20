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
		"content": `<style>.b64bcebht {
  d: path("m9.5 11 3 -3h4");
}

.jelyk0_mp {
  d: path("M5.5 14.5 9 11h6l3.5 3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8zcug1ct {
  d: path("M15 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.uvrxvrzpu {
  d: path("M2 14.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}
</style><g class="nrj6p8qat"><path class="uvrxvrzpu"/><path class="o8zcug1ct"/><path class="jelyk0_mp"/><path class="b64bcebht"/></g>`,
		"fallback": "iconmind:motorbike-outline-regular",
	});
}

export default Component;
