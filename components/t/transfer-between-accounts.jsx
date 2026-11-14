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
		"content": `<style>.sn8ra-bhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h8v7h-8Zm11 9h8v7h-8ZM13 7.5h5m-2-2l2 2l-2 2m-5 7H6m2-2l-2 2l2 2");
}
</style><path class="sn8ra-bhi"/>`,
		"fallback": "uix-sharp:transfer-between-accounts",
	});
}

export default Component;
