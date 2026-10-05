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
		"content": `<style>.m_gb810ov {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6L17 6L17 18L2 18ZM17 10L22 7.5L22 16.5L17 14");
}
</style><path class="m_gb810ov"/>`,
		"fallback": "keyline-icons:video-2-sharp",
	});
}

export default Component;
