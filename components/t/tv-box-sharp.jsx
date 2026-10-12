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
		"content": `<style>.f61izqzht {
  d: path("M11 11.25v2.5l2.25-1.25Zm-2.75 5.5v2m7.5-2v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y7bgmvbma {
  d: path("M5.75 8.25h12.5v8.5H5.75z");
}
</style><g class="x2cwu0gfd"><path class="y7bgmvbma"/><path class="f61izqzht"/></g>`,
		"fallback": "iconoven:tv-box-sharp",
	});
}

export default Component;
