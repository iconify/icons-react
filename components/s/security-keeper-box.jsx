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
		"content": `<style>.eb_h147bp {
  d: path("M11.136 19H8.5q-.098 0-.195-.019t-.188-.057t-.173-.093q-.081-.054-.151-.124t-.124-.151q-.055-.082-.093-.173t-.057-.188T7.5 18v-6.5c0-1.5.5-2.75 2-3.5V5h3v3c1.5.75 2 2 2 3.5v1.578m-.75 4.672a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H22m-2 0V20m2-2.25v1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9yiwebei {
  d: path("M12.8 21.5H3.5v-19h15v11.3");
}
</style><g class="ulnmmdpxh"><path class="x9yiwebei"/><path class="eb_h147bp"/></g>`,
		"fallback": "uix-sharp:security-keeper-box",
	});
}

export default Component;
