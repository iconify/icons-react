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
		"content": `<style>.kz9n24bpt {
  fill: currentColor;
  d: path("M16 8h4v2h-4zm0 4h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.mxrwm4bmj {
  fill: currentColor;
  d: path("M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 8h-4v-2h4zm0-4h-4V8h4z");
}
</style><path class="kz9n24bpt"/><path class="mxrwm4bmj"/>`,
		"fallback": "ic:twotone-desk",
	});
}

export default Component;
