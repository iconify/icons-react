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
		"content": `<style>.ae2dzwofq {
  d: path("M8 9V6h9v6");
}

.cyibsnbck {
  d: path("M11 6V3h8v9m-9.5 4.5h5");
}

.p99nrmbpu {
  d: path("M3 12h18l-1.5 9h-15Zm2 0V9h9v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p99nrmbpu"/><path class="ae2dzwofq"/><path class="cyibsnbck"/></g>`,
		"fallback": "uix-sharp:print-run",
	});
}

export default Component;
