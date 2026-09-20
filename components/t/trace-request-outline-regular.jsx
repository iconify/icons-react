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
		"content": `<style>.bie4u9bix {
  d: path("M19 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gvmyg7bww {
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gwbi1m5_l {
  d: path("M12 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.puqp14a3r {
  d: path("m6 7 6 6");
}

.u5k3kbbab {
  d: path("M16 15h4");
}
</style><g class="nrj6p8qat"><path class="gvmyg7bww"/><path class="puqp14a3r"/><path class="gwbi1m5_l"/><path class="u5k3kbbab"/><path class="bie4u9bix"/></g>`,
		"fallback": "iconmind:trace-request-outline-regular",
	});
}

export default Component;
