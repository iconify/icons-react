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
		"content": `<style>.mvxp_vbai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 3H21M16 9H21M3 15H8M3 21H12M3 3H12M3 9H5M9 9H12M12 15H21");
}
</style><path class="mvxp_vbai"/>`,
		"fallback": "keyline-icons:text-word-spacing",
	});
}

export default Component;
