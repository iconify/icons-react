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
		"content": `<style>.b3d1hobxs {
  d: path("m22 13 -4 4");
}

.er-rmmbme {
  d: path("M6 10V5h6v5");
}

.i-eao3sns {
  d: path("m18 13 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u9zbhwwpi {
  d: path("M2 10v9h14v-9Z");
}
</style><g class="s0phu2bbs"><path class="u9zbhwwpi"/><path class="er-rmmbme"/><path class="i-eao3sns"/><path class="b3d1hobxs"/></g>`,
		"fallback": "iconmind:invite-decline-outline-bold",
	});
}

export default Component;
