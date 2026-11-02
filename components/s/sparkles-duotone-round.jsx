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

.jibxwvd7m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 7c-3.75 0-4 .25-4 4c0-3.75-.25-4-4-4c3.75 0 4-.25 4-4c0 3.75.25 4 4 4m-6 8c-3.008.003-5.997 2.992-6 6c-.003-3.008-2.992-5.997-6-6c3.008-.003 5.997-2.992 6-6c.003 3.008 2.992 5.997 6 6");
}

.tt34imv5l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9c0 3 3 6 6 6c-3 0-6 3-6 6c0-3-3-6-6-6c3 0 6-3 6-6m8-6c0 3.75.25 4 4 4c-3.75 0-4 .25-4 4c0-3.75-.25-4-4-4c3.75 0 4-.25 4-4");
}
</style><g class="ft5dv1b6b"><path class="jibxwvd7m"/><path class="tt34imv5l"/></g>`,
		"fallback": "coolicons:sparkles-duotone-round",
	});
}

export default Component;
