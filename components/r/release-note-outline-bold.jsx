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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wl7bxfbmv {
  d: path("M9 7h3l3 3 -3 3H9Z");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="wl7bxfbmv"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:release-note-outline-bold",
	});
}

export default Component;
