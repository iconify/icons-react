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
		"content": `<style>.ddgawbqpo {
  d: path("M2.5 12a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0Z");
}

.evgbxu44f {
  d: path("M8 12a4 7 0 1 0 8 0a4 7 0 1 0-8 0Zm-5.5 0h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ddgawbqpo"/><path class="evgbxu44f"/></g>`,
		"fallback": "uix-sharp:map-projection",
	});
}

export default Component;
