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
		"content": `<style>.hg-35sbze {
  fill: currentColor;
  d: path("M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.s5cxumhbh {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z");
}
</style><path class="hg-35sbze"/><path class="s5cxumhbh"/>`,
		"fallback": "ic:twotone-space-dashboard",
	});
}

export default Component;
