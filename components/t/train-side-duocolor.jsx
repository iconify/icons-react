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
		"content": `<style>.fenrwvbik {
  d: path("M19 15H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a10 10 0 0 1 8 4c1.2 1.6 2 2.5 2 4a2 2 0 0 1-2 2M3 9h16M9 5v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ut1zoqbwr {
  stroke-opacity: 0.4;
  d: path("M3 19h18");
}
</style><g class="nrj6p8qat"><path class="ut1zoqbwr"/><path class="fenrwvbik"/></g>`,
		"fallback": "coolicons:train-side-duocolor",
	});
}

export default Component;
