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
		"content": `<style>.l98eicowx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 21v-8a2 2 0 0 1 4 0V9a2 2 0 0 1 4 0v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qnm4x6bjh {
  d: path("M20 21v-8a2 2 0 0 0 -4 0V9a2 2 0 0 0 -4 0");
}

.w9aji_ueq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 21v-8a2 2 0 0 0 -4 0V9a2 2 0 0 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yhc-cm80y {
  d: path("M4 21v-8a2 2 0 0 1 4 0V9a2 2 0 0 1 4 0v6");
}
</style><g class="nrj6p8qat"><path class="l98eicowx"/><path class="w9aji_ueq"/><path class="yhc-cm80y"/><path class="qnm4x6bjh"/></g>`,
		"fallback": "iconmind:sign-language-duotone-regular",
	});
}

export default Component;
