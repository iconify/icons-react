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
		"content": `<style>.kr8tikb4n {
  d: path("m12.5 10 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wtizylb9r {
  d: path("m8 10 6 -6");
}

.xi253xtcz {
  d: path("M4 12h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
}
</style><g class="nrj6p8qat"><path class="xi253xtcz"/><path class="wtizylb9r"/><path class="kr8tikb4n"/></g>`,
		"fallback": "iconmind:noodle-outline-regular",
	});
}

export default Component;
