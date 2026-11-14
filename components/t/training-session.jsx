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
		"content": `<style>.j_2iylb5f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.848 11.25H4q-1.75 0-1.75-1.75V7q0-1.75 1.75-1.75h10.002q3.002.001 5.125 2.123Q21.25 9.497 21.25 12.5t-2.123 5.127T14 19.75t-5.127-2.123Q6.75 15.503 6.75 12.5q0-.645.098-1.25M4 6.75h5.573q-.361.285-.7.623Q7.798 8.449 7.267 9.75H4q-.25 0-.25-.25V7q0-.25.25-.25M14 9.5q3 0 3 3t-3 3t-3-3t3-3");
}
</style><path class="j_2iylb5f"/>`,
		"fallback": "uix-solid:training-session",
	});
}

export default Component;
