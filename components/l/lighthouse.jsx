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
		"content": `<style>.gzrxf38vz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9L9 5L11.2363 2.3545C11.6358 1.8819 12.3642 1.8819 12.7637 2.3545L15 5L15 9L9 9ZM9 5L15 5M7 9L17 9M9 9L7 22M15 9L17 22M8.3846 13L15.6154 13M7.6923 17.5L16.3077 17.5M4 22L20 22M22 3L20 4M20 14L22 15M21 9L22 9M2 3L4 4M4 14L2 15M3 9L2 9");
}
</style><path class="gzrxf38vz"/>`,
		"fallback": "keyline-icons:lighthouse",
	});
}

export default Component;
