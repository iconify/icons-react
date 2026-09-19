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
		"content": `<style>.phpl6ac6n {
  fill: currentColor;
  d: path("M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4s4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4");
}
</style><path class="phpl6ac6n"/>`,
		"fallback": "ic:sharp-person-remove-alt-1",
	});
}

export default Component;
