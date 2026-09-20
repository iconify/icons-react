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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-_d8xbww {
  d: path("m7 12 3 -3 3 3 4 -4");
}

.of6j6rbkz {
  d: path("m7 21 5 -5 5 5");
}

.ttk4e4b0g {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.vhf3_kexp {
  d: path("M12 16v5");
}
</style><g class="hntgybcog"><path class="ttk4e4b0g"/><path class="vhf3_kexp"/><path class="of6j6rbkz"/><path class="o-_d8xbww"/></g>`,
		"fallback": "iconmind:presentation-outline-thin",
	});
}

export default Component;
