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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oy_qfibdp {
  d: path("M2 2L12 2L22 12.8284L12.8284 22L2 12L2 2Z");
}

.s1f4hpnzw {
  fill: currentColor;
  d: path("M9.5 8C9.5 8.8284 8.8284 9.5 8 9.5C7.1716 9.5 6.5 8.8284 6.5 8C6.5 7.1716 7.1716 6.5 8 6.5C8.8284 6.5 9.5 7.1716 9.5 8Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="oy_qfibdp"/><path class="s1f4hpnzw"/></g>`,
		"fallback": "keyline-icons:tag-sharp",
	});
}

export default Component;
