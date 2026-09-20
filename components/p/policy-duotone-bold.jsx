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

.c6jnv7x8o {
  d: path("M11 10h6");
}

.mmi5hvbvz {
  d: path("M9 8v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ws9v8zbhe {
  d: path("M11 16h6");
}

.y1_flyglu {
  d: path("M11 13h6");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="mmi5hvbvz"/><path class="c6jnv7x8o"/><path class="y1_flyglu"/><path class="ws9v8zbhe"/></g>`,
		"fallback": "iconmind:policy-duotone-bold",
	});
}

export default Component;
