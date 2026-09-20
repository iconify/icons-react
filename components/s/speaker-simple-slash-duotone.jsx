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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e5-4pbcao {
  d: path("M192 152v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0m40-72a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-10.08 130.62a8 8 0 1 1-11.84 10.76L168 175.09V224a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h41.55L50.08 45.38a8 8 0 0 1 11.84-10.76ZM152 157.49L96.1 96H40v64h48a7.94 7.94 0 0 1 4.91 1.69L152 207.64Zm-26.94-88.18l26.94-21v58.47a8 8 0 0 0 16 0V32a8 8 0 0 0-12.91-6.31l-39.85 31a8 8 0 0 0 9.82 12.63Z");
}

.icps4mb-p {
  d: path("M160 32v192l-72-56H40a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="icps4mb-p"/><path class="e5-4pbcao"/></g>`,
		"fallback": "ph:speaker-simple-slash-duotone",
	});
}

export default Component;
