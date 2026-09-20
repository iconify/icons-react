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
		"content": `<style>.k5g5kukae {
  d: path("M8 7h10l-4 4 4 4H8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vavi9cbgb {
  d: path("M8 7v12");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="z9ittvbis"/><path class="vavi9cbgb"/><path class="k5g5kukae"/></g>`,
		"fallback": "iconmind:milestone-outline-regular",
	});
}

export default Component;
