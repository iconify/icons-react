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
		"content": `<style>.mwtwrccyv {
  d: path("m10 15 5 -5");
}

.nm0sjob8b {
  d: path("M7 19a2.5 2.5 0 0 1 0 -5l9 -9a2.5 2.5 0 0 1 3 3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="nm0sjob8b"/><path class="mwtwrccyv"/></g>`,
		"fallback": "iconmind:medical-thermometer-outline-regular",
	});
}

export default Component;
