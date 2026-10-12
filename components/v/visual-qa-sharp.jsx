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
		"content": `<style>.j_2pr43cx {
  d: path("M15 14.5a1.25 1.25 0 1 1 1.75 1.15v.6");
}

.roz3dfbdk {
  d: path("M2.75 2.75h13.5v11H2.75z");
}

.rv0bghndy {
  d: path("m5.5 11l3-3l2.5 2.5m2.25.75h8v8h-5.5l-2.5 2v-2h-2v-8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="roz3dfbdk"/><path class="rv0bghndy"/><path class="j_2pr43cx"/></g>`,
		"fallback": "iconoven:visual-qa-sharp",
	});
}

export default Component;
