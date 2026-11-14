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
		"content": `<style>.oak2ecb2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V6M7.5 6h9m-8 0l7 3l-7 3l7 3l-7 3m-1 0h9M12 18v3.5");
}
</style><path class="oak2ecb2n"/>`,
		"fallback": "uix:shock-absorber",
	});
}

export default Component;
