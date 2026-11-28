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
		"content": `<style>.es7p34w5j {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 7L3 7L3 21L17 21L17 17M14.1213 9.8787L14.8284 9.1716L20.8536 3.1464M12 3L21 3L21 12M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="es7p34w5j"/>`,
		"fallback": "keyline-icons:square-arrow-out-up-right-off-sharp",
	});
}

export default Component;
