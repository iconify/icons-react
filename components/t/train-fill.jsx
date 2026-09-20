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
		"content": `<style>.it5xfwepc {
  fill: currentColor;
  d: path("M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M84 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36-64H56V80h64Zm52 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12m28-64h-64V80h64Z");
}
</style><path class="it5xfwepc"/>`,
		"fallback": "ph:train-fill",
	});
}

export default Component;
