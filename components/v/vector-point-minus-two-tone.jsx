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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojhix5knx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 8L12 8C13.1046 8 14 8.8954 14 10L14 12C14 13.1046 13.1046 14 12 14L10 14C8.8954 14 8 13.1046 8 12L8 10C8 8.8954 8.8954 8 10 8Z");
  stroke: none;
}

.ygf8tebjf {
  d: path("M10 9L12 9C12.5523 9 13 9.4477 13 10L13 12C13 12.5523 12.5523 13 12 13L10 13C9.4477 13 9 12.5523 9 12L9 10C9 9.4477 9.4477 9 10 9ZM2 19C2 15 5 11 9 11M13 11C17 11 22 9 22 5M16 19L22 19");
}
</style><g class="nrj6p8qat"><path class="ojhix5knx"/><path class="ygf8tebjf"/></g>`,
		"fallback": "keyline-icons:vector-point-minus-two-tone",
	});
}

export default Component;
