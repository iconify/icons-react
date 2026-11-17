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

.tvmo3pshz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v15H6Z");
}

.wzsbeib1h {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v15h12V6M4 6h16M8 6V3h8v3");
}
</style><g class="ft5dv1b6b"><path class="tvmo3pshz"/><path class="wzsbeib1h"/></g>`,
		"fallback": "coolicons:trash-duotone-sharp",
	});
}

export default Component;
