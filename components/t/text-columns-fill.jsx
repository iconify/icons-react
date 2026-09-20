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
		"content": `<style>.pa2t_u7ku {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M112 184H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m88 96h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m0-32h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16");
}
</style><path class="pa2t_u7ku"/>`,
		"fallback": "ph:text-columns-fill",
	});
}

export default Component;
