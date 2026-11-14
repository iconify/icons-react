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
		"content": `<style>.fi5hojbcn {
  d: path("M19.214 9.893L19.5 10L21 5.5L16 3c-.5 1.5-2 2.5-4 2.5S8.5 4.5 8 3L3 5.5L4.5 10l2-.75V20h6.28m4.72-9.78v-.97l.59.221");
}

.k5e8xxuuw {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8.5 1.5c1.75 2.25 3 3.75 3 5.5a3 3 0 0 1-6 0c0-1.75 1.25-3.25 3-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fi5hojbcn"/><path class="k5e8xxuuw"/></g>`,
		"fallback": "uix-sharp:stain-remover",
	});
}

export default Component;
