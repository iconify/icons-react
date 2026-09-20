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
		"content": `<style>.li5x4yeoz {
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.th9km1b0i {
  d: path("M3 10.5h18");
}

.xqqgnb16i {
  d: path("M3 13.5h18");
}
</style><g class="s0phu2bbs"><path class="li5x4yeoz"/><path class="th9km1b0i"/><path class="xqqgnb16i"/></g>`,
		"fallback": "iconmind:macronutrient-outline-bold",
	});
}

export default Component;
