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
		"content": `<style>.er-rmmbme {
  d: path("M6 10V5h6v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u9zbhwwpi {
  d: path("M2 10v9h14v-9Z");
}

.vrzeiketi {
  d: path("m16 15 2 2 4 -4");
}

.y8z8cuc_n {
  fill: currentColor;
  d: path("M2 10v9h14v-9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y8z8cuc_n"/><path class="u9zbhwwpi"/><path class="er-rmmbme"/><path class="vrzeiketi"/></g>`,
		"fallback": "iconmind:invite-accept-duotone-regular",
	});
}

export default Component;
