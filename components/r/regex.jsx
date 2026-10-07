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
		"content": `<style>.hq7hcpb6a {
  fill: currentColor;
  d: path("M6 20C6 21.1046 5.1046 22 4 22C2.8954 22 2 21.1046 2 20C2 18.8954 2.8954 18 4 18C5.1046 18 6 18.8954 6 20Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x5u6p1bxp {
  d: path("M17 3L17 13M13 11L21 5M13 5L21 11");
}
</style><g class="nrj6p8qat"><path class="x5u6p1bxp"/><path class="hq7hcpb6a"/></g>`,
		"fallback": "keyline-icons:regex",
	});
}

export default Component;
