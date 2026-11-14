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
		"content": `<style>.geo20hrtb {
  d: path("M7.5 2.5h9l-4.5 5Zm4.5 5v2m-5.5 0h11v12h-11Z");
}

.s3117q8vc {
  d: path("M10.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1 4.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="geo20hrtb"/><path class="s3117q8vc"/></g>`,
		"fallback": "uix-sharp:lanyard-pass",
	});
}

export default Component;
