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
		"content": `<style>.pecaz-bmy {
  d: path("M18.25 2v2.25h2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y__aag1qj {
  d: path("M21.5 11.8V21h-19V8h9.2M6 11v7m3.5-7v7m6.5-6.2V21m-2.75-8.5v4m5.5-4v4M14.5 2h3.75l2.25 2.25V9h-6Z");
}
</style><g class="ulnmmdpxh"><path class="y__aag1qj"/><path class="pecaz-bmy"/></g>`,
		"fallback": "uix-sharp:treasury-bill-of-lading",
	});
}

export default Component;
