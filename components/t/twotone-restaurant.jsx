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
		"content": `<style>.t895g874i {
  fill: currentColor;
  d: path("M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4m-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2z");
}
</style><path class="t895g874i"/>`,
		"fallback": "ic:twotone-restaurant",
	});
}

export default Component;
