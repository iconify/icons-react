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
		"content": `<style>.rlx4b1bpx {
  fill: currentColor;
  d: path("M6 21V9q0-2.5 1.75-4.25T12 3t4.25 1.75T18 9v4.2l1.6-1.6L21 13l-4 4l-4-4l1.4-1.4l1.6 1.6V9q0-1.65-1.175-2.825T12 5T9.175 6.175T8 9v12z");
}
</style><path class="rlx4b1bpx"/>`,
		"fallback": "material-symbols:u-turn-right",
	});
}

export default Component;
