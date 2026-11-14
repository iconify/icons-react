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
		"content": `<style>.hjo1a6p1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 19H2.5V5h19v10.2m-19-5.7h19m-19 0h19M6 15h2.5m9.5 0v6m-3-3h6");
}
</style><path class="hjo1a6p1b"/>`,
		"fallback": "uix-sharp:payment-card-add",
	});
}

export default Component;
