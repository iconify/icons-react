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
		"content": `<style>.e1rarmetm {
  d: path("M12 13.25C13.25 15 14 16 14 17a2 2 0 0 1-4 0c0-1 .75-2 2-3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvkoukbee {
  d: path("M3 8h18v13.5H3Zm6 0V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M3 11h18");
}
</style><g class="ulnmmdpxh"><path class="vvkoukbee"/><path class="e1rarmetm"/></g>`,
		"fallback": "uix-sharp:spill-kit",
	});
}

export default Component;
