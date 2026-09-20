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
		"content": `<style>.j0pwry6go {
  fill: currentColor;
  d: path("M208 57.38V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 176 80v42.21l-40-22.85V72a8 8 0 0 0-16 0v27.36l-40 22.85V80a24 24 0 0 0-16-22.62V32a8 8 0 0 0-16 0v25.38A24 24 0 0 0 32 80v136a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a24 24 0 0 0-16-22.62M200 72a8 8 0 0 1 8 8v24h-16V80a8 8 0 0 1 8-8M56 72a8 8 0 0 1 8 8v24H48V80a8 8 0 0 1 8-8m-8 48h16v88H48Zm80 32a24 24 0 0 0-24 24v32H80v-67.36l48-27.43l48 27.43V208h-24v-32a24 24 0 0 0-24-24m64 56v-88h16v88Z");
}
</style><path class="j0pwry6go"/>`,
		"fallback": "ph:synagogue",
	});
}

export default Component;
