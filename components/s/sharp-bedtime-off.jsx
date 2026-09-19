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
		"content": `<style>.pkld6hb1i {
  fill: currentColor;
  d: path("M21.19 21.19L2.81 2.81L1.39 4.22l2.27 2.27A9.96 9.96 0 0 0 2 12c0 5.52 4.48 10 10 10c2.04 0 3.93-.62 5.51-1.66l2.27 2.27zM12.34 2.02c-2.18-.07-4.19.55-5.85 1.64l4.59 4.59c-.27-2.05.1-4.22 1.26-6.23");
}
</style><path class="pkld6hb1i"/>`,
		"fallback": "ic:sharp-bedtime-off",
	});
}

export default Component;
