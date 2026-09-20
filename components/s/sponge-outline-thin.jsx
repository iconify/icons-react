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
		"content": `<style>.arrljibna {
  d: path("M14 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gcyir0cbn {
  d: path("M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qbme7ibis {
  d: path("M4 12c2 -2 4 2 6 0s4 2 6 0 3 1 4 0");
}
</style><g class="hntgybcog"><path class="gcyir0cbn"/><path class="qbme7ibis"/><path class="arrljibna"/></g>`,
		"fallback": "iconmind:sponge-outline-thin",
	});
}

export default Component;
