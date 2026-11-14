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
		"content": `<style>.gjov701ua {
  d: path("M9.702 7.227H5.813L3.161 9.879l3.712.176m7.425 1.768v1.8m-1.846 3.935l-.806.806l-.176-3.712m-4.066-.531l-1.768 1.768M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.jx2kdpwet {
  d: path("m18.718 2.808l-.884 5.48l-6.364 6.364l-4.597-4.597l6.364-6.364Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jx2kdpwet"/><path class="gjov701ua"/></g>`,
		"fallback": "uix-sharp:rocket-search",
	});
}

export default Component;
