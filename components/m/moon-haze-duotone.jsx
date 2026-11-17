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
		"content": `<style>.lm0ke8_gk {
  stroke-opacity: 0.4;
  d: path("M18.3264 13C18.7583 12.091 19 11.074 19 10C17.0185 11.585 14.1618 11.427 12.3673 9.633C10.5729 7.838 10.4147 4.982 12 3C8.134 3 5 6.134 5 10C5 11.074 5.2417 12.091 5.6736 13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xqavz_biw {
  d: path("M4 17H20M5 21H10M14 21H19");
}
</style><g class="nrj6p8qat"><path class="lm0ke8_gk"/><path class="xqavz_biw"/></g>`,
		"fallback": "keyline-icons:moon-haze-duotone",
	});
}

export default Component;
