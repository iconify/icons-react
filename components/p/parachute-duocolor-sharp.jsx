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
		"content": `<style>.astx6kbnz {
  d: path("M3 9c0-4 4-6 9-6s9 2 9 6q-4.5-3-9 0q-4.5-3-9 0");
}

.ayzshzbep {
  stroke-opacity: 0.4;
  d: path("m3 9l9 9l9-9m-9 0v12m-3 0h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ayzshzbep"/><path class="astx6kbnz"/></g>`,
		"fallback": "coolicons:parachute-duocolor-sharp",
	});
}

export default Component;
