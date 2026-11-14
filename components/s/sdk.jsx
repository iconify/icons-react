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
		"content": `<style>.ccoq6veyu {
  d: path("M10 13.25L7.75 15.5L10 17.75m4-4.5l2.25 2.25L14 17.75");
}

.gtcyzsbna {
  d: path("M2.5 10.5h19v10h-19Zm1.5 0L5.5 7h13l1.5 3.5ZM9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gtcyzsbna"/><path class="ccoq6veyu"/></g>`,
		"fallback": "uix-sharp:sdk",
	});
}

export default Component;
