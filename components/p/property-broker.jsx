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
		"content": `<style>.gtcatqbge {
  d: path("M2.5 5H5v8H2.5Zm16.6 8H19V5h2.5v6.6M19 6.5h-3.5L11 10c-.75.6-.5 1.75.5 1.75h1L15 10M5 6.5h3L10.25 8");
}

.qc0aetbow {
  d: path("M5 11.5L9 15c.5.5 1.25.5 1.75 0l1.925-1.65m.759-.651L14.25 12H19m-4 9l6-6m-5.5.5h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gtcatqbge"/><path class="qc0aetbow"/></g>`,
		"fallback": "uix-sharp:property-broker",
	});
}

export default Component;
