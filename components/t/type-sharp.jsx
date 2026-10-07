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
		"content": `<style>.me-qdx3-x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7L4 3L20 3L20 7M12 3L12 21M7 21L17 21");
}
</style><path class="me-qdx3-x"/>`,
		"fallback": "keyline-icons:type-sharp",
	});
}

export default Component;
