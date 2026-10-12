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
		"content": `<style>.bdflu961o {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 10h.01M12 12.25h.01M15 10h.01");
}

.i3ge_w21d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75h18.5a9.25 9.25 0 0 1-18.5 0");
}

.pnopb7b7a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.75a6.5 6.5 0 0 0 13 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="i3ge_w21d"/><path class="pnopb7b7a"/><path class="bdflu961o"/></g>`,
		"fallback": "iconoven:watermelon",
	});
}

export default Component;
