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
		"content": `<style>.k4qo1xe9v {
  d: path("M4 6h16");
}

.l1t_ywb-p {
  d: path("M4 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8od38cnm {
  d: path("M4 18h16");
}
</style><g class="nrj6p8qat"><path class="k4qo1xe9v"/><path class="l1t_ywb-p"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:redact-outline-regular",
	});
}

export default Component;
