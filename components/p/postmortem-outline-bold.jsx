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

.kpspt_bpo {
  d: path("M7 8h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zoojiz4yw {
  d: path("m7 12 5 5h5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="kpspt_bpo"/><path class="zoojiz4yw"/></g>`,
		"fallback": "iconmind:postmortem-outline-bold",
	});
}

export default Component;
