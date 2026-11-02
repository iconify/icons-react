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
		"content": `<style>.pekdaxbzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1c.64 0 1.36.36 2 1l1 1c.738.738 2 .107 2-1v-3m0-6V7c0-1.107-1.262-1.738-2-1M2 2l20 20");
}
</style><path class="pekdaxbzw"/>`,
		"fallback": "coolicons:volume-off-round",
	});
}

export default Component;
