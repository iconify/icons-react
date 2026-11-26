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
		"content": `<style>.ph26gdc3v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 6.5L15 2L9 2L10.5 6.5M13.5 6.5L15.9996 16.9844L12 21.9999L8.0004 16.9844L10.5 6.5M13.5 6.5L10.5 6.5");
}
</style><path class="ph26gdc3v"/>`,
		"fallback": "keyline-icons:necktie-sharp",
	});
}

export default Component;
