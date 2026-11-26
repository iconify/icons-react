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
		"content": `<style>.e7311cbrz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L2 3L2 17L22 17L22 12M12 17L12 21M7 21L17 21M22 2L22 7L16 7M18.2929 4.7071L16 7L18.2929 9.2929");
}
</style><path class="e7311cbrz"/>`,
		"fallback": "keyline-icons:monitor-2-return-sharp",
	});
}

export default Component;
