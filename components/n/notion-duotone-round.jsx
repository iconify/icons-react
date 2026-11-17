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

.kj7y5ub8v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 17v-7l5 7v-7M3 3h15l3 3v15H6l-3-3Zm18 3H6v15M3 3l3 3");
}

.oxtgpb4zl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18 3l3 3v15H6l-3-3V3Z");
}
</style><g class="ft5dv1b6b"><path class="oxtgpb4zl"/><path class="kj7y5ub8v"/></g>`,
		"fallback": "coolicons:notion-duotone-round",
	});
}

export default Component;
