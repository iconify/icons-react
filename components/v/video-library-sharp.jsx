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
		"content": `<style>.au9uyccni {
  d: path("M2.75 7.75h15.5v13.5H2.75z");
}

.gdkel4bsw {
  d: path("M6.75 3.75h14.5v13M9.43 12.42l2.64 1.66l.68.42l-.68.42l-2.64 1.66l-.68.42v-5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="au9uyccni"/><path class="gdkel4bsw"/></g>`,
		"fallback": "iconoven:video-library-sharp",
	});
}

export default Component;
