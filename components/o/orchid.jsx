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
		"content": `<style>.bmwgh671v {
  d: path("M12 11c-4 1.5-5 6-3 9.5q3-2 6 0c2-3.5 1-8-3-9.5");
}

.f82s-dwsz {
  d: path("M12 11c-2.5-3-2-6.5 0-8.5c2 2 2.5 5.5 0 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.phjc2aclq {
  d: path("M12 11c-3-4-8-4-9-1c1 3.5 6 3.5 9 1m0 0c3-4 8-4 9-1c-1 3.5-6 3.5-9 1");
}
</style><g class="hntgybcog"><path class="f82s-dwsz"/><path class="phjc2aclq"/><path class="bmwgh671v"/></g>`,
		"fallback": "uix:orchid",
	});
}

export default Component;
