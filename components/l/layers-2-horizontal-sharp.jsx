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
		"content": `<style>.p6i6d3boh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.182L7.5 2L2 12L7.5 22L12 13.818M22 12L16.5 22L11 12L16.5 2L22 12Z");
}
</style><path class="p6i6d3boh"/>`,
		"fallback": "keyline-icons:layers-2-horizontal-sharp",
	});
}

export default Component;
