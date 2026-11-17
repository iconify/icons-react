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

.ladu0zb5b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3a2 2 0 0 1 2 2v5c-.003 5.351-3.324 8.92-8 11c-4.676-2.08-7.997-5.649-8-11V5a2 2 0 0 1 2-2Z");
}

.sojv_8bkw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h6a2 2 0 0 1 2 2v5c0 5.5-3.5 9-8 11c-4.5-2-8-5.5-8-11V5a2 2 0 0 1 2-2zm-2 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 9a4.167 4.167 0 0 1 8 0");
}
</style><g class="ft5dv1b6b"><path class="ladu0zb5b"/><path class="sojv_8bkw"/></g>`,
		"fallback": "coolicons:shield-user-duotone",
	});
}

export default Component;
