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
		"content": `<style>.hg9ku-7_y {
  fill: currentColor;
  d: path("M10 20v-6.992h6.923q0-.64.452-1.093q.451-.453 1.085-.453t1.087.452T20 13v7h-4.23v-3.308h-1.54V20zm-6 0V8.692l11.23-4.326V12H9v8z");
}
</style><path class="hg9ku-7_y"/>`,
		"fallback": "material-symbols-light:villa-sharp",
	});
}

export default Component;
