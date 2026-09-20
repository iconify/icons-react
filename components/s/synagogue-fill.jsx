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
		"content": `<style>.xrnrsx_7o {
  fill: currentColor;
  d: path("M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M64 208H48v-96h16Zm144 0h-16v-96h16Z");
}
</style><path class="xrnrsx_7o"/>`,
		"fallback": "ph:synagogue-fill",
	});
}

export default Component;
