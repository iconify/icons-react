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
		"content": `<style>.bbwwx_-me {
  d: path("M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c5cd6qoin {
  d: path("M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-128v56c0 52.72-25.52 84.67-46.93 102.19c-23.06 18.86-46 25.27-47 25.53a8 8 0 0 1-4.2 0c-1-.26-23.91-6.67-47-25.53C57.52 196.67 32 164.72 32 112V56a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 0H48v56c0 37.3 13.82 67.51 41.07 89.81A128.3 128.3 0 0 0 128 223.62a129.3 129.3 0 0 0 39.41-22.2C194.34 179.16 208 149.07 208 112Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bbwwx_-me"/><path class="c5cd6qoin"/></g>`,
		"fallback": "ph:shield-warning-duotone",
	});
}

export default Component;
