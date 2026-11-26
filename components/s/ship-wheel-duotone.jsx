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
		"content": `<style>.lmcpit57j {
  d: path("M19 12C19 15.866 15.866 19 12 19C8.134 19 5 15.866 5 12C5 8.134 8.134 5 12 5C15.866 5 19 8.134 19 12Z");
}

.lr4q_rbvr {
  stroke-opacity: 0.4;
  d: path("M12 2L12 22M21 6.8038L3 17.1962M21 17.1962L3 6.8038");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lr4q_rbvr"/><path class="lmcpit57j"/></g>`,
		"fallback": "keyline-icons:ship-wheel-duotone",
	});
}

export default Component;
