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
		"content": `<style>.aenh7db3u {
  d: path("M4 15.5h4.5V20H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xja0wfbyz {
  d: path("M4 20V6l16 14Z");
}
</style><g class="ulnmmdpxh"><path class="xja0wfbyz"/><path class="aenh7db3u"/></g>`,
		"fallback": "uix-sharp:pythagorean-theorem",
	});
}

export default Component;
