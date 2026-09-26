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
		"content": `<style>.srgjyix3s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 8C18 11.3137 15.3137 14 12 14C8.6863 14 6 11.3137 6 8C6 4.6863 8.6863 2 12 2C15.3137 2 18 4.6863 18 8ZM12 14L12 23M7.5 19L16.5 19");
}
</style><path class="srgjyix3s"/>`,
		"fallback": "keyline-icons:venus-sharp",
	});
}

export default Component;
