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
		"content": `<style>.nsy3b5b7o {
  fill: currentColor;
  d: path("M10.787 53.213c11.715 11.717 30.711 11.717 42.426 0c11.716-11.715 11.716-30.711 0-42.426s-30.711-11.715-42.426 0s-11.716 30.711 0 42.426M12 18h5.219v14l17.39-14v14L52 18v28L34.608 32v14l-17.39-14v14H12z");
}
</style><path class="nsy3b5b7o"/>`,
		"fallback": "emojione-monotone:last-track-button",
	});
}

export default Component;
