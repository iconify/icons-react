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
		"content": `<style>.spcboybbm {
  d: path("M10 21.5v-4h4v4M12 12V5.5M12 9c0-3-2-4.5-5-4.5C7 7.5 9 9 12 9Zm0-1.5c0-3 2-4.5 5-4.5c0 3-2 4.5-5 4.5Z");
}

.tdtq1_bim {
  d: path("M4 12h16v9.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tdtq1_bim"/><path class="spcboybbm"/></g>`,
		"fallback": "uix-sharp:rooftop-garden",
	});
}

export default Component;
