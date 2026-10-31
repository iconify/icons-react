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
		"content": `<style>.tlfzzz8uz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21L11.0931 3.5786C11.4515 2.8071 12.5485 2.8071 12.9069 3.5786L21 21M2 21L22 21M12 3L12 21M12 12.3895L16 21");
}
</style><path class="tlfzzz8uz"/>`,
		"fallback": "keyline-icons:tent",
	});
}

export default Component;
