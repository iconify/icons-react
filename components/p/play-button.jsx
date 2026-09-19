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
		"content": `<style>.l52v-gm-j {
  fill: currentColor;
  d: path("M53.213 10.788c-11.715-11.717-30.711-11.717-42.426 0c-11.716 11.715-11.716 30.71 0 42.425s30.711 11.715 42.426 0s11.716-30.711 0-42.425M25 52.012V11.989L45 32z");
}
</style><path class="l52v-gm-j"/>`,
		"fallback": "emojione-monotone:play-button",
	});
}

export default Component;
