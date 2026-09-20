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
		"content": `<style>.l9u31wb0s {
  fill: currentColor;
  d: path("M192 152a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-104v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm80 72a32 32 0 0 0-32-32l11.55-20a8 8 0 0 0-13.86-8l-25.4 44l-.14.27A32 32 0 1 0 208 152");
}
</style><path class="l9u31wb0s"/>`,
		"fallback": "ph:text-h-six-fill",
	});
}

export default Component;
