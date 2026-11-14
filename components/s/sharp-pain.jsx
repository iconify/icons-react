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
		"content": `<style>.ojdjtbvcd {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.uf0ine87u {
  d: path("M12 9V2.5M12 15v6.5M9 12H2.5M15 12h6.5M14 10l3-3m-3 7l3 3m-7-3l-3 3m3-7L7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uf0ine87u"/><path class="ojdjtbvcd"/></g>`,
		"fallback": "uix-sharp:sharp-pain",
	});
}

export default Component;
