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
		"content": `<style>.me-v6vu-r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17.25h.01");
}

.ofjoxibmr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8A5.25 5.25 0 0 1 8.5 2.75h5V8ZM4.5 8v2.5M12.25 8v2.5m-9.5 0h12.5l6 3.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yghhb540w {
  cx: 9px;
  cy: 17.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><path class="ofjoxibmr"/><circle class="yghhb540w"/><path class="me-v6vu-r"/></g>`,
		"fallback": "iconoven:tonga",
	});
}

export default Component;
