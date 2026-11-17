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

.hrckqibmt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m21 9l-9 9l-9-9l9-6Z");
}

.ib82_klhc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l9 6l-9 9l-9-9zm0 0v15M3 9h18m-9 9c0 3 5 3 7 3");
}
</style><g class="ft5dv1b6b"><path class="hrckqibmt"/><path class="ib82_klhc"/></g>`,
		"fallback": "coolicons:kite-duotone-sharp",
	});
}

export default Component;
