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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s6vpnyndj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4H19C20.657 4 22 5.343 22 7L12.707 11C12.285 11.282 11.715 11.282 11.293 11L2 7C2 5.343 3.343 4 5 4Z");
  stroke: none;
}

.vfx43lbau {
  d: path("M13 20H2V7M2 7V4H22V7M2 7L11.293 11C11.715 11.282 12.285 11.282 12.707 11L22 7M22 7V11M23 17H16M19.293 20.293L16 17L19.293 13.707");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="s6vpnyndj"/><path class="vfx43lbau"/></g>`,
		"fallback": "keyline-icons:mail-arrow-left-sharp-fill",
	});
}

export default Component;
