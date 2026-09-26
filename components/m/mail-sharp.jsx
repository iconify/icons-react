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
		"content": `<style>.hsujqd_kx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20L2 4ZM2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7");
}
</style><path class="hsujqd_kx"/>`,
		"fallback": "keyline-icons:mail-sharp",
	});
}

export default Component;
