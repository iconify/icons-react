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
		"content": `<style>.ai59blwbp {
  d: path("M14.68 7.35L17.37 12l-2.69 4.65H9.32L6.63 12l2.69-4.65Z");
}

.nrtp-rb4w {
  d: path("m12.3 3.22l2.08 3.61l.3.52h5.37l-.3.52l-2.08 3.61l-.3.52l.3.52l2.08 3.61l.3.52h-5.37l-.3.52l-2.08 3.61l-.3.52l-.3-.52l-2.08-3.61l-.3-.52H3.95l.3-.52l2.08-3.61l.3-.52l-.3-.52l-2.08-3.61l-.3-.52h5.37l.3-.52l2.08-3.61l.3-.52z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nrtp-rb4w"/><path class="ai59blwbp"/></g>`,
		"fallback": "iconoven:star-of-david-sharp",
	});
}

export default Component;
