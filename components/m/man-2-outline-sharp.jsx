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
		"content": `<style>.tr1hnt8oi {
  fill: currentColor;
  d: path("M10.673 21.5v-6.57H8.462V7.424h7.077v7.5h-2.212V21.5zM12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808");
}
</style><path class="tr1hnt8oi"/>`,
		"fallback": "material-symbols-light:man-2-outline-sharp",
	});
}

export default Component;
