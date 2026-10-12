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
		"content": `<style>.gnhxk5bjp {
  d: path("M7 12h10v3H7z");
}

.sixvpwi0r {
  d: path("m3.62 5.5l3.51-2L8 3h8l.87.5l3.51 2l.87.5v6H17v9.25H7V12H2.75V6zm5.63-2.25l4.5 8.75m1-8.75l-2.3 4.25M7 7v4.5M17 7v4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sixvpwi0r"/><path class="gnhxk5bjp"/></g>`,
		"fallback": "iconoven:kimono-sharp",
	});
}

export default Component;
