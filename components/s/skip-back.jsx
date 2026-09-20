import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nozsdxbpg {
  fill: currentColor;
  d: path("M199.81 34a16 16 0 0 0-16.24.43L64 109.23V40a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-69.23l119.57 74.78A15.95 15.95 0 0 0 208 208.12V47.88A15.86 15.86 0 0 0 199.81 34M192 208L64.16 128L192 48.07Z");
}
</style><path class="nozsdxbpg"/>`,
		"fallback": "ph:skip-back",
	});
}

export default Component;
