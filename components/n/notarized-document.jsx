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
		"content": `<style>.j_hrww23d {
  d: path("m16.5 10.5l.841.861l1.159-.325l.298 1.166l1.166.298l-.325 1.159l.861.841l-.861.841l.325 1.159l-1.166.298l-.298 1.166l-1.159-.325l-.841.861l-.841-.861l-1.159.325l-.298-1.166l-1.166-.298l.325-1.159l-.861-.841l.861-.841l-.325-1.159l1.166-.298l.298-1.166l1.159.325Z");
}

.p26mcfbte {
  d: path("M11.7 20H3.5V2.5H18v5.6M6.5 6.5h8m-8 3.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvsg4sbjd {
  d: path("m14.75 18l-.5 3.75l2.25-1.25l2.25 1.25l-.5-3.75");
}
</style><g class="ulnmmdpxh"><path class="p26mcfbte"/><path class="j_hrww23d"/><path class="wvsg4sbjd"/></g>`,
		"fallback": "uix-sharp:notarized-document",
	});
}

export default Component;
