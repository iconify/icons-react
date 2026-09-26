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
		"content": `<style>.e_3j-yy9k {
  stroke-opacity: 0.4;
  d: path("M21 19L12 19");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kox3di8sl {
  d: path("M3.7191 4.7593L11.0001 11L3.6508 17.2993");
}
</style><g class="gp_8x1bzb"><path class="kox3di8sl"/><path class="e_3j-yy9k"/></g>`,
		"fallback": "keyline-icons:terminal-sharp-duotone",
	});
}

export default Component;
