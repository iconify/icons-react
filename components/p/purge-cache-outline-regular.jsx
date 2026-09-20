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
		"content": `<style>.ml5vh8o3m {
  d: path("M17 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ngom1s3yg {
  d: path("M20 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v7v_f9j5h {
  d: path("M18 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zp4rqbtqe {
  d: path("M3 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="zp4rqbtqe"/><path class="ml5vh8o3m"/><path class="ngom1s3yg"/><path class="v7v_f9j5h"/></g>`,
		"fallback": "iconmind:purge-cache-outline-regular",
	});
}

export default Component;
