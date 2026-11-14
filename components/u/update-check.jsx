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
		"content": `<style>.aihfrab2h {
  d: path("M17.785 5.106a9 9 0 1 1-8.863-1.563");
}

.dckcxggmq {
  d: path("M5.75 3.5h3v3m-.75 6l3 3l5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aihfrab2h"/><path class="dckcxggmq"/></g>`,
		"fallback": "uix-sharp:update-check",
	});
}

export default Component;
