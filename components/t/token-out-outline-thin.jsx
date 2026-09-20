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
		"content": `<style>.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gt6j6sb9g {
  d: path("M3 7a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pz3wsjbwy {
  d: path("M14.5 9.5 17 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="gt6j6sb9g"/><path class="pz3wsjbwy"/><path class="fcstqn4mf"/></g>`,
		"fallback": "iconmind:token-out-outline-thin",
	});
}

export default Component;
