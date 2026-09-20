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
		"content": `<style>.t9ta8e6ii {
  fill: currentColor;
  d: path("M180 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m52-76v120a20 20 0 0 1-20 20H32a20 20 0 0 1-20-19.92V88a4 4 0 0 1 8 0v96a12 12 0 0 0 24 0V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v120a19.86 19.86 0 0 1-4 12h160a12 12 0 0 0 12-12Z");
}
</style><path class="t9ta8e6ii"/>`,
		"fallback": "ph:newspaper-thin",
	});
}

export default Component;
