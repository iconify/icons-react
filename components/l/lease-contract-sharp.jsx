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
		"content": `<style>.g91r1v1en {
  d: path("M13.5 2.75V7.5h4.75M7.75 7h3m-3 3h6");
}

.lw-29wg_i {
  cx: 12px;
  cy: 15.5px;
  r: 2.5px;
}

.qqw7ehgrx {
  d: path("M10.75 17.75v2.75l1.25-.85l1.25.85v-2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yugr1rb5b {
  d: path("M6 2.75h7.5l4.75 4.75v13.75H4.75V2.75z");
}
</style><g class="x2cwu0gfd"><path class="yugr1rb5b"/><path class="g91r1v1en"/><circle class="lw-29wg_i"/><path class="qqw7ehgrx"/></g>`,
		"fallback": "iconoven:lease-contract-sharp",
	});
}

export default Component;
