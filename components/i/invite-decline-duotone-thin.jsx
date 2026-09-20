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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-eao3sns {
  d: path("m18 13 4 4");
}

.u9zbhwwpi {
  d: path("M2 10v9h14v-9Z");
}

.y8z8cuc_n {
  fill: currentColor;
  d: path("M2 10v9h14v-9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="y8z8cuc_n"/><path class="u9zbhwwpi"/><path class="er-rmmbme"/><path class="i-eao3sns"/><path class="b3d1hobxs"/></g>`,
		"fallback": "iconmind:invite-decline-duotone-thin",
	});
}

export default Component;
