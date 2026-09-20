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
		"content": `<style>.lyvbhbbht {
  fill: currentColor;
  d: path("M14.479 14.479Q15.5 13.458 15.5 12t-1.021-2.479T12 8.5T9.521 9.521T8.5 12t1.021 2.479T12 15.5t2.479-1.021M3 19V5h18v14z");
}
</style><path class="lyvbhbbht"/>`,
		"fallback": "material-symbols-light:screenshot-keyboard-sharp",
	});
}

export default Component;
