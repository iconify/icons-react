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
		"content": `<style>.cjpys8beh {
  d: path("M8.5 19.5L12 12.5L15.5 19.5L12 18.6945L8.5 19.5Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j0mppdb_k {
  d: path("M19 21L21 21L21 3L3 3L3 21L5 21");
}
</style><g class="gp_8x1bzb"><path class="j0mppdb_k"/><path class="cjpys8beh"/></g>`,
		"fallback": "keyline-icons:square-navigation-sharp",
	});
}

export default Component;
