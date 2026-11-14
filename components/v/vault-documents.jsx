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
		"content": `<style>.h2jtppdvo {
  d: path("M10.75 12.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.25-1l1.75-1.75M13 13.25L14.75 15M11 13.25L9.25 15M11 11.25L9.25 9.5");
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqe1lkbce {
  d: path("M8.25 12.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="q3wixnhae"/><path class="uqe1lkbce"/><path class="h2jtppdvo"/></g>`,
		"fallback": "uix-sharp:vault-documents",
	});
}

export default Component;
