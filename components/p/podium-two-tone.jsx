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
		"content": `<style>.hs-hx_bat {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 17.25V13.75H9V10.25H14V6.75H20V17.25H4Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.umnetetzo {
  d: path("M2 17.25H22M4 17.25V13.75H9V10.25H14V6.75H20V17.25H4Z");
}
</style><g class="nrj6p8qat"><path class="hs-hx_bat"/><path class="umnetetzo"/></g>`,
		"fallback": "keyline-icons:podium-two-tone",
	});
}

export default Component;
