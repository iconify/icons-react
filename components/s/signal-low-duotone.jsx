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
		"content": `<style>.dno4_nblm {
  fill: currentColor;
  d: path("M3 20C3 20.5523 2.5523 21 2 21C1.4477 21 1 20.5523 1 20C1 19.4477 1.4477 19 2 19C2.5523 19 3 19.4477 3 20Z");
  stroke: none;
}

.n99-ercef {
  stroke-linejoin: miter;
  stroke-opacity: 0.4;
  d: path("M12 20L12 12M17 20L17 8M22 20L22 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z9y-hod0k {
  stroke-linejoin: miter;
  d: path("M7 20L7 16");
}
</style><g class="nrj6p8qat"><path class="z9y-hod0k"/><path class="n99-ercef"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-low-duotone",
	});
}

export default Component;
