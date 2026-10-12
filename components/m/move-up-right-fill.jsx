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
		"content": `<style>.se8_s9bum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 20L19.4 4.6M14 4L19.5 4C19.7761 4 20 4.2239 20 4.5L20 10");
}
</style><path class="se8_s9bum"/>`,
		"fallback": "keyline-icons:move-up-right-fill",
	});
}

export default Component;
