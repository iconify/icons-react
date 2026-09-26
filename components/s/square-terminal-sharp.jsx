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
		"content": `<style>.b8oinfbmc {
  d: path("M6.7071 6.7071L11 11L6.7071 15.2929M12 17L18 17");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="b8oinfbmc"/></g>`,
		"fallback": "keyline-icons:square-terminal-sharp",
	});
}

export default Component;
