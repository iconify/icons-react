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
		"content": `<style>.q-_ff9zwt {
  fill: currentColor;
  d: path("M10.23 21.5v-6.577H8.463V9.039q0-.667.474-1.141t1.141-.475h3.846q.667 0 1.141.475t.475 1.14v5.885h-1.77V21.5zM12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808");
}
</style><path class="q-_ff9zwt"/>`,
		"fallback": "material-symbols-light:man-outline",
	});
}

export default Component;
