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
		"content": `<style>.unbad5scs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10c0-3 2-4 5-4h8c3 0 5 1 5 4v3c0 3-2 5-4 5s-3-3-5-3s-3 3-5 3s-4-2-4-5Z");
}
</style><path class="unbad5scs"/>`,
		"fallback": "coolicons:vr-headset-duocolor-sharp",
	});
}

export default Component;
