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
		"content": `<style>.y_jxsqbdh {
  fill: currentColor;
  d: path("M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-48 128h44v16h-80v-16Zm12-24v-16h32v16Zm32-80v40h-44a12 12 0 0 0-12 12v28h-36a12 12 0 0 0-12 12v28H60V44ZM60 212v-24h136v24Z");
}
</style><path class="y_jxsqbdh"/>`,
		"fallback": "ph:stairs-bold",
	});
}

export default Component;
