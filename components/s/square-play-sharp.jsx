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
		"content": `<style>.dg3pwub2o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM8.9627 7.3013L16.4807 12L8.9627 16.6987L8.9627 7.3013Z");
}
</style><path class="dg3pwub2o"/>`,
		"fallback": "keyline-icons:square-play-sharp",
	});
}

export default Component;
