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
		"content": `<style>.cpzj_9brc {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3m6 13v4m-4 .5h8");
}

.hab8ndwcd {
  d: path("M8 9.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwdfuk_8y {
  d: path("M10.75 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 8.25V5.5m1 4.5l2.5 1.5M11 10l-2.5 1.5");
}
</style><g class="hntgybcog"><path class="cpzj_9brc"/><path class="hab8ndwcd"/><path class="kwdfuk_8y"/></g>`,
		"fallback": "uix:vault-digital",
	});
}

export default Component;
