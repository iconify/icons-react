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
		"content": `<style>.gb9v9obyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.6 4.6L19.4 19.4M20 14L20 19.5C20 19.7761 19.7761 20 19.5 20L14 20M4 10L4 4.5C4 4.2239 4.2239 4 4.5 4L10 4");
}
</style><path class="gb9v9obyb"/>`,
		"fallback": "keyline-icons:move-diagonal-flip-two-tone",
	});
}

export default Component;
