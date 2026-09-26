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
		"content": `<style>.ku09t65dm {
  d: path("M16 12L22 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x5ls4k8te {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 10C1 8.895431 1.895431 8 3 8L5.477658 8L8.3585 3.861189C9.477163 2.254043 12 3.045621 12 5.003765L12 18.996235C12 20.954379 9.477163 21.745957 8.3585 20.138811L5.477658 16L3 16C1.895431 16 1 15.104569 1 14Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x5ls4k8te"/><path class="ku09t65dm"/></g>`,
		"fallback": "keyline-icons:volume-minus-duotone",
	});
}

export default Component;
