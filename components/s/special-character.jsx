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
		"content": `<style>.xq6yu6bkc {
  fill: currentColor;
  d: path("M4 20v-2h4.616q-2.062-.99-3.281-2.904t-1.22-4.212q0-3.28 2.302-5.582T12 3t5.583 2.302t2.302 5.583q0 2.298-1.22 4.211T15.385 18H20v2h-6.808v-3.35q2.066-.408 3.38-2.038q1.313-1.631 1.313-3.727q0-2.454-1.716-4.17T12 5T7.83 6.716Q6.116 8.43 6.116 10.885q0 2.096 1.314 3.726q1.313 1.631 3.379 2.039V20z");
}
</style><path class="xq6yu6bkc"/>`,
		"fallback": "material-symbols-light:special-character",
	});
}

export default Component;
