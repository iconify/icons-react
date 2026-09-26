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
		"content": `<style>.cq2_qrlix {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 17.998L13.5417 12L22 6.002L22 17.998ZM10 17.998L2 12L10 6.002L10 17.998Z");
}
</style><path class="cq2_qrlix"/>`,
		"fallback": "keyline-icons:rewind-sharp-duotone",
	});
}

export default Component;
