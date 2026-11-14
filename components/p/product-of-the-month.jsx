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
		"content": `<style>.fol5bzpsp {
  d: path("m3 7l9 4.5L21 7m-9 4.5v10M7.5 4.75l9 4.5m-1.25 7.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1.25 2.5l-1 2.75m4-2.75l1 2.75");
}

.sm8qxe14w {
  d: path("M12.916 21.042L12 21.5L3 17V7l9-4.5L21 7v5.038");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sm8qxe14w"/><path class="fol5bzpsp"/></g>`,
		"fallback": "uix-sharp:product-of-the-month",
	});
}

export default Component;
