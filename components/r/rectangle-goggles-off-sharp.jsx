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
		"content": `<style>.b0fazabjp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.6569 6L11.6569 6L22 6L22 16.3431L22 17.3431M18 18L16 18L12 13L8 18L2 18L2 6L6 6M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="b0fazabjp"/>`,
		"fallback": "keyline-icons:rectangle-goggles-off-sharp",
	});
}

export default Component;
