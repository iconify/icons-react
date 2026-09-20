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
		"content": `<style>.pdu-xkbsu {
  d: path("m16 4 -7 7h5l-7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xba0otb-m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 4 -7 7h5l-7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="xba0otb-m"/><path class="pdu-xkbsu"/></g>`,
		"fallback": "iconmind:trigger-duotone-bold",
	});
}

export default Component;
