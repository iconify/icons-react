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
		"content": `<style>.m81tr9buq {
  fill: currentColor;
  d: path("M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-60 64h56v16h-56Zm0 40h56v16h-56Zm56-64h-56V60h56ZM60 60h56v136H60Zm80 136v-16h56v16Z");
}
</style><path class="m81tr9buq"/>`,
		"fallback": "ph:square-half-bold",
	});
}

export default Component;
