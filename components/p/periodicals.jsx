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
		"content": `<style>.b3ciglh9x {
  d: path("M11.75 11.5h5.5V18h-5.5Z");
}

.ky780r74p {
  d: path("M9 5h11v16.5H9Zm2.75 3.5h5.5");
}

.qeb8j6bgh {
  d: path("m8.75 21.5l-4-16l10.5-2.75l.5 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qeb8j6bgh"/><path class="ky780r74p"/><path class="b3ciglh9x"/></g>`,
		"fallback": "uix-sharp:periodicals",
	});
}

export default Component;
