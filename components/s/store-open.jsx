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
		"content": `<style>.hr04v9bok {
  d: path("m3 6.5l1.5-4h15l1.5 4M4.5 9v12.5h15V9");
}

.tbm-76b7c {
  fill: currentColor;
  d: path("M10 15h4v3.25h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymo_d4btp {
  d: path("M3 6.5a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-13.75 15v-9.25h9.5v9.25");
}
</style><g class="ulnmmdpxh"><path class="hr04v9bok"/><path class="ymo_d4btp"/><path class="tbm-76b7c"/></g>`,
		"fallback": "uix-sharp:store-open",
	});
}

export default Component;
