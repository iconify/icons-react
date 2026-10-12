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
		"content": `<style>.k_vj6sb3c {
  d: path("M8.82 5.82L5.644 9l3.176 3.18m6.36-6.36L18.356 9l-3.176 3.18M6.7 3.7a7.5 7.5 0 0 0 0 10.6M17.3 3.7a7.5 7.5 0 0 1 0 10.6M6 17.75h12M8.5 21h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-ze1jbyb {
  cx: 12px;
  cy: 9px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><circle class="z-ze1jbyb"/><path class="k_vj6sb3c"/></g>`,
		"fallback": "iconoven:podcast-episode-sharp",
	});
}

export default Component;
