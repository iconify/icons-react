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
		"content": `<style>.wtzx0ccci {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M21 15L21 21L15 21M9 21L3 21L3 15M7 9.4239L12 12M12 12L17 9.4239M12 12L12 17M12 7L17 9.4239L17 14.5761L12 17L7 14.5761L7 9.4239L12 7Z");
}
</style><path class="wtzx0ccci"/>`,
		"fallback": "keyline-icons:scan-box-sharp",
	});
}

export default Component;
