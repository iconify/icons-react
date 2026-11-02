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
		"content": `<style>.lnif62bnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v15h12V6M4 6h16M8 6V3h8v3m-6 4v7m4-7v7");
}
</style><path class="lnif62bnz"/>`,
		"fallback": "coolicons:trash-full-sharp",
	});
}

export default Component;
