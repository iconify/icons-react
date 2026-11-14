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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yewhk9hma {
  d: path("M6.5 12a5.5 3.5 0 1 0 11 0a5.5 3.5 0 1 0-11 0ZM12 5v3.5");
}
</style><g class="ulnmmdpxh"><path class="ddgawbqpo"/><path class="yewhk9hma"/></g>`,
		"fallback": "uix-sharp:loop-band",
	});
}

export default Component;
