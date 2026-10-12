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
		"content": `<style>.cp7ccubjp {
  d: path("M3.25 21.25v-5a5 5 0 0 1 5-5h7.5a5 5 0 0 1 5 5v5");
}

.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.vb0pkgbqw {
  d: path("M7.25 14h11l-.93 1.18l-2.89 3.64L13.5 20h-4l-.79-1.27l-2.17-3.46L5.75 14zm8.25 0l-1.75-2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="cp7ccubjp"/><path class="vb0pkgbqw"/></g>`,
		"fallback": "iconoven:sling-arm-sharp",
	});
}

export default Component;
