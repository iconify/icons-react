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
		"content": `<style>.ta9cbo4wj {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m5.06-103.67l13.24-22.18a12 12 0 1 0-20.6-12.3l-32.24 54a40 40 0 1 0 39.6-19.53ZM128 164a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="ta9cbo4wj"/>`,
		"fallback": "ph:number-circle-six-bold",
	});
}

export default Component;
