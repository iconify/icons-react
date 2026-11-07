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
		"content": `<style>.ybp35ibxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10H6a3 3 0 0 1-1.562-5.562M10 4h8a3 3 0 0 1 0 6h-2m3.562 9.562c-.455.278-.99.438-1.562.438H6a3 3 0 0 1 0-6h8m-7 3h.01M2 2l20 20");
}
</style><path class="ybp35ibxh"/>`,
		"fallback": "coolicons:server-off-round",
	});
}

export default Component;
