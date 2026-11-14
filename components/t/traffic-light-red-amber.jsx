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
		"content": `<style>.tnk-0ohqo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.536 2.714Q14.071 1.25 12 1.25T8.464 2.714Q7 4.179 7 6.25v11.5q0 2.071 1.464 3.536Q9.929 22.75 12 22.75t3.536-1.464Q17 19.821 17 17.75V6.25q0-2.071-1.464-3.536M9.75 6.25Q9.75 4 12 4t2.25 2.25T12 8.5T9.75 6.25M12 9.75q2.25 0 2.25 2.25T12 14.25T9.75 12T12 9.75m-2.25 8q0-2.25 2.25-2.25t2.25 2.25T12 20t-2.25-2.25");
}
</style><path class="tnk-0ohqo"/>`,
		"fallback": "uix-solid:traffic-light-red-amber",
	});
}

export default Component;
