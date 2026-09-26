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
		"content": `<style>.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.upr2r56ap {
  stroke-opacity: 0.4;
  d: path("M20 19L13 19");
}

.xntj31bof {
  d: path("M4 5L10.5571 10.6204C10.7899 10.8199 10.7899 11.1801 10.5571 11.3796L4 17");
}
</style><g class="to0c2ub7t"><path class="xntj31bof"/><path class="upr2r56ap"/></g>`,
		"fallback": "keyline-icons:terminal-duotone",
	});
}

export default Component;
