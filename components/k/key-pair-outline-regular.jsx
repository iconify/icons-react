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
		"content": `<style>.fs--blxyx {
  d: path("M9 13v3");
}

.jnysnpbhj {
  d: path("M17 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t-euypbap {
  d: path("M3 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.uto0n9pso {
  d: path("M7 16h10");
}

.yo-0d--rc {
  d: path("M15 8v3");
}
</style><g class="nrj6p8qat"><path class="t-euypbap"/><path class="kpspt_bpo"/><path class="yo-0d--rc"/><path class="jnysnpbhj"/><path class="uto0n9pso"/><path class="fs--blxyx"/></g>`,
		"fallback": "iconmind:key-pair-outline-regular",
	});
}

export default Component;
