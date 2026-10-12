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
		"content": `<style>.a_iqnxbyz {
  d: path("m12.25 11.75l.27 1.98l1.98.27l-1.98.27l-.27 1.98l-.27-1.98L10 14l1.98-.27z");
}

.hhxfk1bfn {
  d: path("M6.25 19.5a3.5 3.5 0 1 1 .88-6.89a5 5 0 1 1 9.84-.57a3.75 3.75 0 1 1 .53 7.46Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hhxfk1bfn"/><path class="a_iqnxbyz"/></g>`,
		"fallback": "iconoven:nebula-cloud-sharp",
	});
}

export default Component;
