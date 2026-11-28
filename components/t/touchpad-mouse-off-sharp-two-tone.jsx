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

.h8z1acccx {
  stroke-opacity: 0.4;
  d: path("M6.6569 2L20 2L20 7");
}

.ijr24qs6a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21.5355 21.5355C20.6318 22.4392 19.3804 23 18 23C15.2386 23 13 20.7614 13 18L13 14C13 13.687 13.0288 13.3808 13.0838 13.0838ZM14.3381 10.5955C15.251 9.614 16.5538 9 18 9C20.7614 9 23 11.2386 23 14L23 18C23 18.3882 22.9556 18.7662 22.8718 19.1292Z");
  stroke: none;
}

.r1_2ofdyo {
  d: path("M11 16L2 16L2 2.4142M20.8284 20.8284C20.1046 21.5523 19.1046 22 18 22C15.7909 22 14 20.2091 14 18L14 14M1.7071 1.7071L22.2929 22.2929");
}
</style><g class="gp_8x1bzb"><path class="ijr24qs6a"/><path class="r1_2ofdyo"/><path class="h8z1acccx"/></g>`,
		"fallback": "keyline-icons:touchpad-mouse-off-sharp-two-tone",
	});
}

export default Component;
