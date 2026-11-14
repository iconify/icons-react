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
		"content": `<style>.llmvc7bpr {
  d: path("M12 19.5c-1.25-1.25-5-4.75-5-8.5a5 5 0 0 1 10 0c0 3.75-3.75 7.25-5 8.5Z");
}

.mh8c6gtqk {
  fill: currentColor;
  d: path("M10.25 11a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zcvu7bcnz {
  d: path("M6.376 4.297a8.75 8.75 0 0 1 11.248 0m0 13.406a8.75 8.75 0 0 1-11.248 0");
}
</style><g class="ulnmmdpxh"><path class="llmvc7bpr"/><path class="mh8c6gtqk"/><path class="zcvu7bcnz"/></g>`,
		"fallback": "uix-sharp:marker-pulse",
	});
}

export default Component;
