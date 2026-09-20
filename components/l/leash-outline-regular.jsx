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
		"content": `<style>.fah6drbfn {
  d: path("M16 18h3v3h-3Z");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.n2em18brm {
  d: path("M9 10c4 2 6 5 7 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lo7kp72nh"/><path class="n2em18brm"/><path class="fah6drbfn"/></g>`,
		"fallback": "iconmind:leash-outline-regular",
	});
}

export default Component;
