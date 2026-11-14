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
		"content": `<style>.jy1dhvben {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 5.75h8q2.589 0 4.419 1.831Q22.25 9.411 22.25 12t-1.831 4.419T16 18.25H8q-2.589 0-4.419-1.831Q1.75 14.589 1.75 12t1.831-4.419Q5.411 5.75 8 5.75M4.25 12q0-3.75 3.75-3.75T11.75 12T8 15.75T4.25 12m1.5 0q0 2.25 2.25 2.25T10.25 12T8 9.75T5.75 12m8.5 0q0-2.25 2.25-2.25T18.75 12t-2.25 2.25T14.25 12");
}
</style><path class="jy1dhvben"/>`,
		"fallback": "uix-solid:toggle-off",
	});
}

export default Component;
