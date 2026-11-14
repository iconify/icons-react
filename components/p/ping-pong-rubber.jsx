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
		"content": `<style>.ga0p5gb2z {
  d: path("M3 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtixtrwmp {
  d: path("M9 17.5h3v4H9Zm6.75-12.75q4.75-2.25 5.75.75L18 10M7.5 9h.01M11 7h.01m-.51 5.5h.01");
}
</style><g class="ulnmmdpxh"><path class="ga0p5gb2z"/><path class="vtixtrwmp"/></g>`,
		"fallback": "uix-sharp:ping-pong-rubber",
	});
}

export default Component;
