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
		"content": `<style>.e0wzywbqy {
  fill: currentColor;
  d: path("M9 20q-2.083 0-3.542-1.458Q4 17.083 4 15V9q0-2.083 1.458-3.542Q6.917 4 9 4h6q2.083 0 3.542 1.458Q20 6.917 20 9v6q0 2.083-1.458 3.542Q17.083 20 15 20zm2-4.692L16.308 10l-.708-.708l-4.6 4.6l-2.2-2.2l-.708.708zM9 19h6q1.65 0 2.825-1.175T19 15V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9v6q0 1.65 1.175 2.825T9 19m3-7");
}
</style><path class="e0wzywbqy"/>`,
		"fallback": "material-symbols-light:priority-outline-sharp",
	});
}

export default Component;
