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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vb7zktbdr {
  d: path("M8.5 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm6.5 5.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.xqb2_ygtj {
  d: path("M12.2 16.5H2.5v-13H20v8.2m-8.75-8.2v13");
}
</style><g class="ulnmmdpxh"><path class="xqb2_ygtj"/><path class="vb7zktbdr"/></g>`,
		"fallback": "uix-sharp:pitch-booking",
	});
}

export default Component;
