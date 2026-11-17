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
		"content": `<style>.b-pamob-o {
  stroke-opacity: 0.4;
  d: path("M8 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.crtstxbue {
  d: path("M7 10h14a8.062 8.062 0 0 1-14 0m8 0V4a6 6 0 0 1 6 6M3 5h2l2 5m3 3v4m8-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b-pamob-o"/><path class="crtstxbue"/></g>`,
		"fallback": "coolicons:stroller-duocolor",
	});
}

export default Component;
