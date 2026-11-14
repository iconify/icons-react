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
		"content": `<style>.o0g7m7bdp {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8");
}

.ud7o7dbuz {
  fill: currentColor;
  d: path("M8 9.75h8v2.5H8ZM8 15h5v2.5H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0g7m7bdp"/><path class="ud7o7dbuz"/></g>`,
		"fallback": "uix-sharp:redaction",
	});
}

export default Component;
