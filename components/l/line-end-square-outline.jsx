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
		"content": `<style>.d33znabhl {
  fill: currentColor;
  d: path("M13.577 14.923h5.846V9.077h-5.846zm-1 1V12.5h-9.5v-1h9.5V8.077h7.846v7.846zM16.5 12");
}
</style><path class="d33znabhl"/>`,
		"fallback": "material-symbols-light:line-end-square-outline",
	});
}

export default Component;
