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
		"content": `<style>.tawwqqbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.752 4.931l-4.453 2.024a1.75 1.75 0 0 0-.513 2.831l2.428 2.428a1.75 1.75 0 0 0 2.831-.513l2.024-4.453a1.75 1.75 0 0 0-2.317-2.317M13 11l-3 3m-6.005 3.884l3.889-3.889a1.5 1.5 0 0 1 2.121 0a1.5 1.5 0 0 1 0 2.121l-3.889 3.889a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121");
}
</style><path class="tawwqqbpg"/>`,
		"fallback": "uix:trowel-plaster",
	});
}

export default Component;
