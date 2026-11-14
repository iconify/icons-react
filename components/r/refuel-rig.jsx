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
		"content": `<style>.fqpatt0eo {
  d: path("M3.5 3h10v18.5h-10Zm10 3H17a2 2 0 0 1 2 2v8m-1.5 0h3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi_l16b5u {
  d: path("M6.25 6h4.5v4h-4.5ZM19 19v2");
}
</style><g class="ulnmmdpxh"><path class="fqpatt0eo"/><path class="vi_l16b5u"/></g>`,
		"fallback": "uix-sharp:refuel-rig",
	});
}

export default Component;
