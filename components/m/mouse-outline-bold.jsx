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
		"content": `<style>.nptt5bbgx {
  d: path("M7 7a5 5 0 0 1 5 -5 5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5 5 5 0 0 1 -5 -5Z");
}

.r182r524c {
  d: path("M7 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uokpg3btu {
  d: path("M12 5v3");
}
</style><g class="s0phu2bbs"><path class="nptt5bbgx"/><path class="r182r524c"/><path class="uokpg3btu"/></g>`,
		"fallback": "iconmind:mouse-outline-bold",
	});
}

export default Component;
