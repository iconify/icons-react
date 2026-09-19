import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uy_i21k3w {
  fill: currentColor;
  d: path("M53.213 10.788c-11.715-11.717-30.711-11.717-42.426 0c-11.716 11.715-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.711 0-42.426M52 46h-5.219V32l-17.39 14V32L12 46V18l17.392 14V18l17.39 14V18H52z");
}
</style><path class="uy_i21k3w"/>`,
		"fallback": "emojione-monotone:next-track-button",
	});
}

export default Component;
