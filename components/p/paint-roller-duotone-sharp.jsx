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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l3awtxrzz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h14v6H3Zm7 12h4v6h-4Z");
}

.lm_meab_g {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h14v6H3Zm14 3h4v6h-9v3m-2 0h4v6h-4Z");
}
</style><g class="ft5dv1b6b"><path class="l3awtxrzz"/><path class="lm_meab_g"/></g>`,
		"fallback": "coolicons:paint-roller-duotone-sharp",
	});
}

export default Component;
