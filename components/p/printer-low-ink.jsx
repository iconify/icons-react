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
		"content": `<style>.l7pn04u5j {
  d: path("M2.5 4h19v10.5h-19Zm4 10.5v5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-5m-8 3h5");
}

.p66g6_b7t {
  d: path("M12 6.75S10.5 8.5 10.5 9.5a1.5 1.5 0 0 0 3 0c0-1-1.5-2.75-1.5-2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l7pn04u5j"/><path class="p66g6_b7t"/></g>`,
		"fallback": "uix-sharp:printer-low-ink",
	});
}

export default Component;
