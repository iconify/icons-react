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
		"content": `<style>.l60r0x32a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 7L3 7L3 21L17 21L17 14M12.7071 11.2929L20.8536 3.1464M12 3L21 3L21 12");
}
</style><path class="l60r0x32a"/>`,
		"fallback": "keyline-icons:square-arrow-out-up-right-sharp",
	});
}

export default Component;
