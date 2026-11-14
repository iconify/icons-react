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
		"content": `<style>.fzfnqngkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19m-16 0l3 5.5h-6Zm4-6.5H16V15H9.5Zm10 3.75V4m-2 2l2-2l2 2");
}
</style><path class="fzfnqngkm"/>`,
		"fallback": "uix-sharp:lever-class-2",
	});
}

export default Component;
