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
		"content": `<style>.ir5ckca4j {
  fill: currentColor;
  d: path("M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M72 40h112a16 16 0 0 1 16 16v64H56V56a16 16 0 0 1 16-16m112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16m-88-28a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="ir5ckca4j"/>`,
		"fallback": "ph:train-simple",
	});
}

export default Component;
