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
		"content": `<style>.suhhndjwd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 13.75h7.5v4.75A2.75 2.75 0 0 1 13 21.25h-2a2.75 2.75 0 0 1-2.75-2.75ZM10.5 16v1.75m3-1.75v1.75");
}

.vhfy2kbyb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.25a9 8.75 0 0 1 18 0a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5");
}

.wkrh57b9c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.5h.01m-4.26 2.75h.01m8.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="vhfy2kbyb"/><path class="wkrh57b9c"/><path class="suhhndjwd"/></g>`,
		"fallback": "iconoven:power-up",
	});
}

export default Component;
