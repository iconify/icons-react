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
		"content": `<style>.hvaxu31iv {
  d: path("M9 15h8");
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t2num1ber {
  d: path("M8 9h9");
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="nrj6p8qat"><path class="iaozfqbuj"/><path class="t2num1ber"/><path class="y5k8b5bfa"/><path class="hvaxu31iv"/></g>`,
		"fallback": "iconmind:planner-outline-regular",
	});
}

export default Component;
