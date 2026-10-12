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
		"content": `<style>.vlqsslb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L9.1716 9.1716M14.8284 14.8284L20.4 20.4M15 21L20.5 21C20.7761 21 21 20.7761 21 20.5L21 15M3 21L20.4 3.6M15 3L20.5 3C20.7761 3 21 3.2239 21 3.5L21 9");
}
</style><path class="vlqsslb1n"/>`,
		"fallback": "keyline-icons:shuffle-2",
	});
}

export default Component;
