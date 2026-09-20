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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.ez2gnf3cn {
  d: path("M9.5 11 12 8.5l2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z4to5ssqg {
  d: path("m9.5 15 2.5 -2.5 2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="a218-cpca"/><path class="ez2gnf3cn"/><path class="z4to5ssqg"/></g>`,
		"fallback": "iconmind:subscription-upgrade-outline-regular",
	});
}

export default Component;
