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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.f9z-0cczq {
  d: path("M9 10.5h6");
}

.mfc7nxp-y {
  d: path("M9 7h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rtrohnbyn {
  d: path("M9 14h2.5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="mfc7nxp-y"/><path class="f9z-0cczq"/><path class="rtrohnbyn"/></g>`,
		"fallback": "iconmind:partial-response-outline-regular",
	});
}

export default Component;
