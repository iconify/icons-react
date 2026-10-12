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
		"content": `<style>.fqnkq7v9n {
  d: path("M9 18v-4a3 3 0 0 1 6 0v4");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.sgcwx9bsh {
  d: path("M5.75 18v-5a6.25 6.25 0 0 1 12.5 0v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="sgcwx9bsh"/><path class="fqnkq7v9n"/></g>`,
		"fallback": "iconoven:tunnel-sign-sharp",
	});
}

export default Component;
