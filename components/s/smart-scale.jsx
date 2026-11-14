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
		"content": `<style>.isayynzek {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.875 2.25h-5.75q-2.848 0-4.861 2.014T2.25 9.125v5.75q0 2.848 2.014 4.861t4.861 2.014h5.75q2.848 0 4.861-2.014t2.014-4.861v-5.75q0-2.848-2.014-4.861T14.875 2.25M10.5 4.75h3q2.25 0 2.25 2.25T13.5 9.25h-3Q8.25 9.25 8.25 7t2.25-2.25m-2 5.75q2.75 0 2.75 4.25T8.5 19t-2.75-4.25T8.5 10.5m4.25 4.25q0-4.25 2.75-4.25t2.75 4.25T15.5 19t-2.75-4.25");
}
</style><path class="isayynzek"/>`,
		"fallback": "uix-solid:smart-scale",
	});
}

export default Component;
