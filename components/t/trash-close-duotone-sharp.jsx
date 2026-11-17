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

.mh8xfbclx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v15h12V6M4 6h16M8 6V3h8v3m-6 6l4 4m0-4l-4 4");
}

.tvmo3pshz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v15H6Z");
}
</style><g class="ft5dv1b6b"><path class="tvmo3pshz"/><path class="mh8xfbclx"/></g>`,
		"fallback": "coolicons:trash-close-duotone-sharp",
	});
}

export default Component;
