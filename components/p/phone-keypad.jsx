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
		"content": `<style>.um6fzac1t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 1.75q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2M4 9.25q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m-10 3.5q-2 0-2 2t2 2t2-2t-2-2m4 2q0-2 2-2t2 2t-2 2t-2-2m8-2q-2 0-2 2t2 2t2-2t-2-2m-8 7.5q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="um6fzac1t"/>`,
		"fallback": "uix-solid:phone-keypad",
	});
}

export default Component;
