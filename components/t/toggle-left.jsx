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
		"content": `<style>.w9xc1bcax {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 5.75H8q-2.589 0-4.419 1.831Q1.75 9.411 1.75 12t1.831 4.419T8 18.25h8q2.589 0 4.419-1.831Q22.25 14.589 22.25 12t-1.831-4.419Q18.589 5.75 16 5.75M4.5 12q0-3.5 3.5-3.5t3.5 3.5T8 15.5q-1.75 0-2.625-.875T4.5 12");
}
</style><path class="w9xc1bcax"/>`,
		"fallback": "uix-solid:toggle-left",
	});
}

export default Component;
