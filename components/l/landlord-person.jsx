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
		"content": `<style>.levkpc75t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25V20a4.5 4.5 0 0 1 4.5-4.5h2a4.5 4.5 0 0 1 4.5 4.5v1.25Zm14-.75v-5.75q0-.75.53-1.28l1.19-1.19q.53-.53 1.06 0l1.19 1.19q.53.53.53 1.28v5.75q0 .75-.75.75h-3q-.75 0-.75-.75");
}

.vqgavtc7j {
  cx: 8.25px;
  cy: 7.25px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_atc20_f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 17.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="vqgavtc7j"/><path class="levkpc75t"/><path class="y_atc20_f"/></g>`,
		"fallback": "iconoven:landlord-person",
	});
}

export default Component;
