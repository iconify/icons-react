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
		"content": `<style>.be9ax0akk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.25 18h.01m3.24 0h.01m3.24 0h.01");
}

.f3dn4mblz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.25V12l-3 2");
}

.rjc1od8nf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="rjc1od8nf"/><path class="f3dn4mblz"/><path class="be9ax0akk"/></g>`,
		"fallback": "iconoven:pending-clock",
	});
}

export default Component;
