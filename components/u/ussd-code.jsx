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
		"content": `<style>.prkw795-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H6V6H2.5Zm6.5 0h3.5V6H9Zm6.5 0H19V6h-3.5ZM2.5 9H6v3.5H2.5ZM9 9h3.5v3.5H9Zm6.5 0H19v3.5h-3.5Zm-13 6.5H6V19H2.5Zm6.5 0h3.5V19H9Zm8.25 0v6m2.75-6v6M15.75 17h5.75m-5.75 3h5.75");
}
</style><path class="prkw795-d"/>`,
		"fallback": "uix-sharp:ussd-code",
	});
}

export default Component;
