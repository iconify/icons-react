import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hsyb-9blz {
  fill: var(--svg-color--db4437, #db4437);
  d: path("M126.71 64c0 34.63-28.07 62.71-62.71 62.71c-34.63 0-62.71-28.08-62.71-62.71C1.29 29.36 29.37 1.29 64 1.29c34.64 0 62.71 28.07 62.71 62.71");
}
</style><path class="hsyb-9blz"/>`,
		"fallback": "noto-v1:red-circle",
	});
}

export default Component;
