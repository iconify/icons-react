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
		"content": `<style>.idg9yr80n {
  d: path("M5.0718 14C4.3697 12.7838 4 11.4043 4 10C4 5.5817 7.5817 2 12 2C16.4183 2 20 5.5817 20 10C20 11.4043 19.6303 12.7838 18.9282 14");
}

.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v_g122bhw {
  stroke-opacity: 0.4;
  d: path("M9 18L15 18M11 22L13 22");
}
</style><g class="to0c2ub7t"><path class="idg9yr80n"/><path class="v_g122bhw"/></g>`,
		"fallback": "keyline-icons:lightbulb-two-tone",
	});
}

export default Component;
