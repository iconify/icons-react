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
		"content": `<style>.g0x5l3bqp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M7 9L7 17L11 17M7 13L11 13M13 13L18 13M13 17L18 17");
}
</style><path class="g0x5l3bqp"/>`,
		"fallback": "keyline-icons:table-tree-sharp",
	});
}

export default Component;
