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
		"content": `<style>.lwsbwehaq {
  d: path("M7 5a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 14 -2.5 14 -1.5 0 -1.5 -6 -2.5 -6s-1 6 -2.5 6C7 19 5 9 7 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wneoubc6n {
  d: path("M7 21h10");
}

.y4hh74kvy {
  fill: currentColor;
  d: path("M7 5a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 14 -2.5 14 -1.5 0 -1.5 -6 -2.5 -6s-1 6 -2.5 6C7 19 5 9 7 5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y4hh74kvy"/><path class="lwsbwehaq"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:tooth-duotone-regular",
	});
}

export default Component;
