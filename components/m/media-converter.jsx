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
		"content": `<style>.he8nlt9wg {
  d: path("M2.5 11h19v9h-19Z");
}

.ni1ybj4mz {
  d: path("M5.5 13.75h4v3.5h-4Zm9 0h4v3.5h-4ZM5 5.5h14m-11.5-2L5 5.5l2.5 2m9-4l2.5 2l-2.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="he8nlt9wg"/><path class="ni1ybj4mz"/></g>`,
		"fallback": "uix-sharp:media-converter",
	});
}

export default Component;
