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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.t_pl0bchx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 5l10 15h-6Z");
}

.w5i1dea2c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 5l10 15H2zm0 0l4 15");
}
</style><g class="ft5dv1b6b"><path class="t_pl0bchx"/><path class="w5i1dea2c"/></g>`,
		"fallback": "coolicons:pyramid-duotone-sharp",
	});
}

export default Component;
