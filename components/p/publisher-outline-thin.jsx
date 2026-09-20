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
		"content": `<style>.gvxo18blr {
  d: path("m7 8 5 -5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mifi8nb9f {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.qotsfstbz {
  d: path("M9 20v-7h6v7");
}
</style><g class="hntgybcog"><path class="mifi8nb9f"/><path class="gvxo18blr"/><path class="qotsfstbz"/></g>`,
		"fallback": "iconmind:publisher-outline-thin",
	});
}

export default Component;
