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
		"content": `<style>.wnjdwdbwo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L2 3L2 17L22 17L22 12M12 17L12 21M7 21L17 21M15.7071 2.7071L22.2929 9.2929M22.2929 2.7071L15.7071 9.2929");
}
</style><path class="wnjdwdbwo"/>`,
		"fallback": "keyline-icons:monitor-2-x-sharp",
	});
}

export default Component;
