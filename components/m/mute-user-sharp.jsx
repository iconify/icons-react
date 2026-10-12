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
		"content": `<style>.bv-cl6bpj {
  d: path("M3.5 20.25h10.75v-.75c0-3-2.6-5.25-5.75-5.25S2.75 16.5 2.75 19.5v.75zM15.1 5.5h.9l.42-.42l1.41-1.41l.42-.42v7.5l-.42-.42l-1.41-1.41L16 8.5h-1.5v-3zm4.4.5l1.75 1.75m0-1.75L19.5 7.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk-0sacrz {
  cx: 8.5px;
  cy: 7.75px;
  r: 3.5px;
}
</style><g class="x2cwu0gfd"><circle class="yk-0sacrz"/><path class="bv-cl6bpj"/></g>`,
		"fallback": "iconoven:mute-user-sharp",
	});
}

export default Component;
