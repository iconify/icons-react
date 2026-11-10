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
		"content": `<style>.kmhorv-sw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.999 7V1M6 22L11.999 9.43L18 22L12 20.24L6 22Z");
}
</style><path class="kmhorv-sw"/>`,
		"fallback": "keyline-icons:navigation-line-sharp",
	});
}

export default Component;
