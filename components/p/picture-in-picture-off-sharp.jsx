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
		"content": `<style>.hen17mbvl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 9L22 4L9.6569 4L8.6569 4M4 4L2 4L2 20L9 20M16.6569 12L17.6569 12L22 12L22 16.3431L22 17.3431M20 20L12 20L12 12M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="hen17mbvl"/>`,
		"fallback": "keyline-icons:picture-in-picture-off-sharp",
	});
}

export default Component;
