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
		"content": `<style>.hcp1k1bnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.303 6.697L6.697 17.303M18.364 2.808l2.828 2.828l-2.474 2.475l-2.829-2.829ZM5.282 15.889l2.829 2.829l-2.475 2.474l-2.828-2.828Z");
}
</style><path class="hcp1k1bnu"/>`,
		"fallback": "uix-sharp:jo-staff",
	});
}

export default Component;
