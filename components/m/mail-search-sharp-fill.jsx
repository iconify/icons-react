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

.xr-ouwbgb {
  d: path("M13 20H2V4H22V11M2 7L11.293 11C11.715 11.282 12.285 11.282 12.707 11L22 7M20.268 18.268L22.293 20.293M21 16.5C21 17.881 19.881 19 18.5 19C17.119 19 16 17.881 16 16.5C16 15.119 17.119 14 18.5 14C19.881 14 21 15.119 21 16.5Z");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="s6vpnyndj"/><path class="xr-ouwbgb"/></g>`,
		"fallback": "keyline-icons:mail-search-sharp-fill",
	});
}

export default Component;
