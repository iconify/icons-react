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
		"content": `<style>.g5nm6yyig {
  d: path("M20 12v9");
}

.m23phibpn {
  d: path("M9 12h13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ok9lcdcuh {
  d: path("M17 21h5");
}

.rp0qbo7xr {
  d: path("M3 21V8l3 -3 3 3v13Z");
}
</style><g class="nrj6p8qat"><path class="rp0qbo7xr"/><path class="m23phibpn"/><path class="g5nm6yyig"/><path class="ok9lcdcuh"/></g>`,
		"fallback": "iconmind:toll-booth-outline-regular",
	});
}

export default Component;
