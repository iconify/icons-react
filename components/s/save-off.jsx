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
		"content": `<style>.ly7_58byf {
  d: path("M7.9 4h8.6L20 7.5v8.55M16.05 20H4V7.95");
}

.nwco7ibdd {
  d: path("M11.986 8H14q.098 0 .195-.019t.188-.057t.173-.093t.151-.124t.124-.151t.093-.173t.057-.188T15 7V4M3.5 3.5l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ly7_58byf"/><path class="nwco7ibdd"/></g>`,
		"fallback": "uix-sharp:save-off",
	});
}

export default Component;
