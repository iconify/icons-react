import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.clb146gbb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10H3V3m7 1h11v6h-5m4 10H3v-6h11m-7 3h.01M2 2l20 20");
}
</style><path class="clb146gbb"/>`,
		"fallback": "coolicons:server-off-sharp",
	});
}

export default Component;
