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
		"content": `<style>.h9jlpgcwn {
  d: path("M7 9h10v12.5H7Zm1.5-6.5h7V9h-7Zm2.25 3.25h2.5");
}

.jljxofb7w {
  d: path("M9.75 14.5h4.5V18h-4.5Zm1 0v-1a1.25 1.25 0 0 1 2.5 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9jlpgcwn"/><path class="jljxofb7w"/></g>`,
		"fallback": "uix-sharp:usb-stick-lock",
	});
}

export default Component;
