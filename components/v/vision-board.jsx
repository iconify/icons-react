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
		"content": `<style>.fwv51jlsb {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-3.5 5.5h11v8h-11Z");
}

.j7rh_c0kj {
  d: path("m8.5 18.5l3-4l3 4m.25-5.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xllez7b7h {
  d: path("M2.5 7h19v14.5h-19Z");
}
</style><g class="ulnmmdpxh"><path class="xllez7b7h"/><path class="fwv51jlsb"/><path class="j7rh_c0kj"/></g>`,
		"fallback": "uix-sharp:vision-board",
	});
}

export default Component;
