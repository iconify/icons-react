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
		"content": `<style>.abwhqy5wb {
  d: path("M16.5 4.5L20 8l-3.5 3.5m3.5 9V16H4");
}

.ok9gfabge {
  d: path("M7.5 12.5L4 16l3.5 3.5");
}

.seqyflbij {
  d: path("M4 3.5V8h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="seqyflbij"/><path class="abwhqy5wb"/><path class="ok9gfabge"/></g>`,
		"fallback": "uix-sharp:swap-horizontal",
	});
}

export default Component;
