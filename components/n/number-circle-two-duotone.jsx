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

.goeug6bgp {
  d: path("M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uel9_fk5e {
  d: path("M153.56 123.26L120 168h32a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88");
}
</style><g class="cuyn6tgcc"><path class="goeug6bgp"/><path class="uel9_fk5e"/></g>`,
		"fallback": "ph:number-circle-two-duotone",
	});
}

export default Component;
