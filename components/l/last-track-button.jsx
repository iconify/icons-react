import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j6m4gdc_i {
  d: path("M6.24 33.23h17.58v61.54H6.24z");
}

.n75kw9-vl {
  d: path("M121.76 32.82L72.82 61.08V32.82L18.83 64l53.99 31.18V66.92l48.94 28.26z");
}

.y94jm1b4c {
  fill: var(--svg-color--40c0e7, #40c0e7);
}
</style><g class="y94jm1b4c"><path class="n75kw9-vl"/><path class="j6m4gdc_i"/></g>`,
		"fallback": "noto-v1:last-track-button",
	});
}

export default Component;
