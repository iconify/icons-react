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
		"content": `<style>.f7gpbidge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7.5C3 5.0147 6.5817 3 11 3C15.4183 3 19 5.0147 19 7.5C19 9.9853 15.4183 12 11 12C6.5817 12 3 9.9853 3 7.5ZM16.5 11C19 12 20 13.5 18.5 15.5C17 17.5 18.5 19.5 21 21");
}
</style><path class="f7gpbidge"/>`,
		"fallback": "keyline-icons:lasso",
	});
}

export default Component;
