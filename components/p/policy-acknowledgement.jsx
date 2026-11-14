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
		"content": `<style>.w80zrlu0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H13M2.5 7.5h9m-9 3.5H8m9.657-7.485l2.828 2.828L12 14.828l-3.536.708L9.172 12ZM2.5 19c1-2.5 2.5-2.5 3-.5S7 20.5 8 18");
}
</style><path class="w80zrlu0l"/>`,
		"fallback": "uix-sharp:policy-acknowledgement",
	});
}

export default Component;
