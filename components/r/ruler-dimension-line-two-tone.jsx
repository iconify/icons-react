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
		"content": `<style>.cpho5swap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L2 17M22 7L22 17M2 12L22 12M7 12L7 15M12 12L12 16M17 12L17 15");
}
</style><path class="cpho5swap"/>`,
		"fallback": "keyline-icons:ruler-dimension-line-two-tone",
	});
}

export default Component;
