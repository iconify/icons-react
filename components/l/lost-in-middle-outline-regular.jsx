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
		"content": `<style>.k6nj2fbya {
  d: path("M3 5h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="nrj6p8qat"><path class="k6nj2fbya"/><path class="x1_r36phd"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:lost-in-middle-outline-regular",
	});
}

export default Component;
