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
		"content": `<style>.dv40gzb0l {
  d: path("M3 5h5v5h5v5h5v5h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p_6ay3b_h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h5v5h5v5h5v5h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="p_6ay3b_h"/><path class="dv40gzb0l"/></g>`,
		"fallback": "iconmind:learning-rate-duotone-regular",
	});
}

export default Component;
