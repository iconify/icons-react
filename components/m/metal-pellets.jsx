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
		"content": `<style>.dnyq99csr {
  d: path("M8 8.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-5.5 11h19");
}

.tb6jmu62v {
  d: path("M4 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tb6jmu62v"/><path class="dnyq99csr"/></g>`,
		"fallback": "uix-sharp:metal-pellets",
	});
}

export default Component;
