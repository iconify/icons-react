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
		"content": `<style>.ed_rqubvi {
  fill: currentColor;
  d: path("M10.23 21.5L8.463 7.423h7.077L13.769 21.5zM12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808");
}
</style><path class="ed_rqubvi"/>`,
		"fallback": "material-symbols-light:man-4-outline-sharp",
	});
}

export default Component;
