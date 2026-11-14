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
		"content": `<style>.flc_k6b4r {
  d: path("m15.5 14.5l.25 1.5l1.5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcu9lo4_f {
  d: path("M13.4 21.5H4.5V4h2.9m9.2 0h2.9v8.6M8 9h8m-8 3.5h4.3M8 16h3m-.75-12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9.871 11.879a3 3 0 1 1-4.242 0");
}
</style><g class="ulnmmdpxh"><path class="vcu9lo4_f"/><path class="flc_k6b4r"/></g>`,
		"fallback": "uix-sharp:statement-notice-change",
	});
}

export default Component;
