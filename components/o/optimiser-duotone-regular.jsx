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
		"content": `<style>.bx3fv3b8c {
  d: path("M12 13v4");
}

.festcnvxk {
  d: path("m3 7 6 6h6l6 -6");
}

.go3vib-_k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 7 6 6h6l6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l3z1h6r5i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 13v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="go3vib-_k"/><path class="l3z1h6r5i"/><path class="festcnvxk"/><path class="bx3fv3b8c"/></g>`,
		"fallback": "iconmind:optimiser-duotone-regular",
	});
}

export default Component;
