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
		"content": `<style>.wb99c8e4b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.602 7.06L20.995 21.08L15.902 22L12.049 10.27L8.003 22L3.004 20.99L5.397 7.06L5.594 6.05L6.382 2H17.617L18.405 6.05L18.602 7.06ZM5.397 7.06H18.602");
}
</style><path class="wb99c8e4b"/>`,
		"fallback": "keyline-icons:pants-sharp",
	});
}

export default Component;
