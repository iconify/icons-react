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
		"content": `<style>.j35lydbau {
  d: path("m21.5 3.5 -3 3");
}

.nv3cshblu {
  d: path("m18.5 3.5 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vt-ep0bmh {
  d: path("M3 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vt-ep0bmh"/><path class="nv3cshblu"/><path class="j35lydbau"/></g>`,
		"fallback": "iconmind:node-taint-remove-outline-bold",
	});
}

export default Component;
