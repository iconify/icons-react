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
		"content": `<style>.gmb8wbbuj {
  fill: currentColor;
  d: path("M214.4 128A28 28 0 1 0 180 84.43V56a28 28 0 0 0-52-14.4A28 28 0 1 0 84.43 76H56a28 28 0 0 0-14.4 52A28 28 0 1 0 76 171.57V200a28 28 0 0 0 52 14.41A28 28 0 1 0 171.57 180H200a28 28 0 0 0 14.4-52M76 152a20 20 0 1 1-20-20h20Zm48 48a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20h20Zm0-76H56a20 20 0 0 1 0-40h48a20 20 0 0 1 20 20Zm0-48h-20a20 20 0 1 1 20-20Zm56 28a20 20 0 1 1 20 20h-20Zm-48-48a20 20 0 0 1 40 0v48a20 20 0 0 1-20 20h-20Zm40 144a20 20 0 0 1-40 0v-20h20a20 20 0 0 1 20 20m28-28h-48a20 20 0 0 1-20-20v-20h68a20 20 0 0 1 0 40");
}
</style><path class="gmb8wbbuj"/>`,
		"fallback": "ph:slack-logo-thin",
	});
}

export default Component;
