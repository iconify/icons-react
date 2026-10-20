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
		"content": `<style>.aalcw1b9r {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4L20 4L20 20L4 20ZM2.7071 21.2929L21.2929 2.7071");
}
</style><path class="aalcw1b9r"/>`,
		"fallback": "keyline-icons:square-slash-2-sharp-two-tone",
	});
}

export default Component;
