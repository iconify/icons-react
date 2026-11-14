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
		"content": `<style>.hwkzlfygx {
  d: path("M7 19.5c0-2.25 1.5-3.5 3.5-3.5s3.5 1.25 3.5 3.5M3 3l18 18");
}

.rm7-_vbey {
  d: path("M8.4 4.5h13.1v13.1m-5.9 1.9H2.5V6.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rm7-_vbey"/><path class="hwkzlfygx"/></g>`,
		"fallback": "uix-sharp:meeting-declined",
	});
}

export default Component;
