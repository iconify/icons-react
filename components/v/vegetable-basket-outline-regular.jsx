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
		"content": `<style>.hue5ncbwv {
  d: path("M7 12a5 5 0 0 1 10 0");
}

.lhk-ji-wo {
  d: path("M5 12v8h14v-8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z22xlf92i {
  d: path("M5 16h14");
}
</style><g class="nrj6p8qat"><path class="lhk-ji-wo"/><path class="z22xlf92i"/><path class="hue5ncbwv"/></g>`,
		"fallback": "iconmind:vegetable-basket-outline-regular",
	});
}

export default Component;
