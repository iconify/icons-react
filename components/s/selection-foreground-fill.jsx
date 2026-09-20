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
		"content": `<style>.cr1mve9vu {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 200H72a16 16 0 0 1-16-16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-88H72v16a8 8 0 0 1-16 0v-16a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16m72 72a16 16 0 0 1-16 16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0Zm0-56a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Zm40 16a16 16 0 0 1-16 16a8 8 0 0 1 0-16V72h-72a8 8 0 0 1-16 0a16 16 0 0 1 16-16h72a16 16 0 0 1 16 16Z");
}
</style><path class="cr1mve9vu"/>`,
		"fallback": "ph:selection-foreground-fill",
	});
}

export default Component;
