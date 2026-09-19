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
		"content": `<style>.v0y_ckfti {
  fill: currentColor;
  d: path("M19.58 3.08L3.15 19.51c.09.34.27.65.51.9c.25.24.56.42.9.51L21 4.49c-.19-.69-.73-1.23-1.42-1.41M11.95 3l-8.88 8.88v2.83L14.78 3zM5.07 3c-1.1 0-2 .9-2 2v2l4-4zm14 18c.55 0 1.05-.22 1.41-.59c.37-.36.59-.86.59-1.41v-2l-4 4zm-9.71 0h2.83l8.88-8.88V9.29z");
}
</style><path class="v0y_ckfti"/>`,
		"fallback": "ic:round-texture",
	});
}

export default Component;
