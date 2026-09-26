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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jpo7_pb2a {
  d: path("M2 21L22 21");
}

.jqtzrzb7p {
  stroke-opacity: 0.4;
  d: path("M6 2L6 11C6 14.3137 8.6863 17 12 17C15.3137 17 18 14.3137 18 11L18 2");
}
</style><g class="gp_8x1bzb"><path class="jqtzrzb7p"/><path class="jpo7_pb2a"/></g>`,
		"fallback": "keyline-icons:underline-sharp-duotone",
	});
}

export default Component;
