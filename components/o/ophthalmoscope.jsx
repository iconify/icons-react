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
		"content": `<style>.q2frblocp {
  d: path("M9.5 12h5v9.5h-5Zm-2-5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn9q8p9vp {
  d: path("M10.75 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-1.25 9h5");
}
</style><g class="ulnmmdpxh"><path class="q2frblocp"/><path class="yn9q8p9vp"/></g>`,
		"fallback": "uix-sharp:ophthalmoscope",
	});
}

export default Component;
