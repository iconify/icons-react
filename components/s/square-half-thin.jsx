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
		"content": `<style>.o2dlj5b8r {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-68 72h72v24h-72Zm0-8V84h72v24Zm0 40h72v24h-72Zm72-92v20h-72V52h68a4 4 0 0 1 4 4M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m148 4h-68v-24h72v20a4 4 0 0 1-4 4");
}
</style><path class="o2dlj5b8r"/>`,
		"fallback": "ph:square-half-thin",
	});
}

export default Component;
