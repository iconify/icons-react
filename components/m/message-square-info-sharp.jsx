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
		"content": `<style>.adv7y5rdr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 7C13 6.4477 12.5523 6 12 6C11.4477 6 11 6.4477 11 7C11 7.5523 11.4477 8 12 8C12.5523 8 13 7.5523 13 7Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zq7ywzblv {
  d: path("M3 3L21 3L21 17L7 17L3 21L3 3ZM12 14L12 13L12 11L12 10");
}
</style><g class="gp_8x1bzb"><path class="zq7ywzblv"/><path clip-rule="evenodd" class="adv7y5rdr"/></g>`,
		"fallback": "keyline-icons:message-square-info-sharp",
	});
}

export default Component;
