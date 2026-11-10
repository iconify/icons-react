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
		"content": `<style>.so3p4h_wv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1V23M2 12L8 16.22V7.78L2 12ZM22 12L16 16.22V7.78L22 12Z");
}
</style><path class="so3p4h_wv"/>`,
		"fallback": "keyline-icons:triangles-centerline-vertical-sharp",
	});
}

export default Component;
