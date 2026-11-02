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

.grut_xbzz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 6h14v14H5Z");
}

.n3ygl20zo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 14v6H5V6h3m4 0h7v4m-4-7l-3 3l3 3");
}
</style><g class="ft5dv1b6b"><path class="grut_xbzz"/><path class="n3ygl20zo"/></g>`,
		"fallback": "coolicons:rotate-left-duotone-sharp",
	});
}

export default Component;
