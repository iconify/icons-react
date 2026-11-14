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
		"content": `<style>.kosd6erbd {
  d: path("M12.6 19.5H2.5v-15h19v8.2");
}

.ny0o8ryum {
  d: path("M6 9.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4.75 16C5 14.5 6.4 13.5 8 13.5s3 1 3.25 2.5M14 9h4.5M14 12h3m-2 9l5.25-5.25m-4-.25h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kosd6erbd"/><path class="ny0o8ryum"/></g>`,
		"fallback": "uix-sharp:remit-sender-info",
	});
}

export default Component;
