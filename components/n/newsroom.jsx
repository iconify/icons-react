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
		"content": `<style>.n74zf0g7q {
  d: path("M2.5 15h19m-17 0v6.5m15-6.5v6.5m-9.75-19h4.5V9h-4.5Z");
}

.rboswco5j {
  d: path("M6.5 6.25a5.5 5.5 0 0 0 11 0m-5.5 5.5V15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n74zf0g7q"/><path class="rboswco5j"/></g>`,
		"fallback": "uix-sharp:newsroom",
	});
}

export default Component;
