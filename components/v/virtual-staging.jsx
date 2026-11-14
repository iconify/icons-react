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
		"content": `<style>.jy7mjxbua {
  d: path("M8 13v-2.5A1.5 1.5 0 0 1 9.5 9h5a1.5 1.5 0 0 1 1.5 1.5V13");
}

.t_aandbkn {
  d: path("M6 17.5v-3a1.5 1.5 0 0 1 3 0v.5h6v-.5a1.5 1.5 0 0 1 3 0v3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yudiqacsm {
  d: path("M2.5 3h19v18h-19Z");
}
</style><g class="ulnmmdpxh"><path class="yudiqacsm"/><path class="jy7mjxbua"/><path class="t_aandbkn"/></g>`,
		"fallback": "uix-sharp:virtual-staging",
	});
}

export default Component;
