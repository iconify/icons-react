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
		"content": `<style>.mm4qtlf9r {
  d: path("M4.75 3.75v15.5h15.5");
}

.pn61g8bmj {
  d: path("M7.75 16.25h3v-3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mm4qtlf9r"/><path class="pn61g8bmj"/></g>`,
		"fallback": "iconoven:right-angle-sharp",
	});
}

export default Component;
