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
		"content": `<style>.ckcrm-l0u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M14.5 6L9.5 6M13.7071 16.7071L18.8536 21.8536M12 22L19 22L19 15");
}
</style><path class="ckcrm-l0u"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-down-right-sharp",
	});
}

export default Component;
