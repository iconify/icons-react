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

.l4a5_zaxy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3v15l-6 3l1-6l-5-5l7-1Z");
}

.mf0i_gb5l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l3 6l7 1l-5 5l1 6l-6-3l-6 3l1-6l-5-5l7-1Zm0 0v15");
}
</style><g class="ft5dv1b6b"><path class="l4a5_zaxy"/><path class="mf0i_gb5l"/></g>`,
		"fallback": "coolicons:star-half-duotone-round",
	});
}

export default Component;
