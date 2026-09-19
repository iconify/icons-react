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
		"content": `<style>.fm67x5emz {
  fill: currentColor;
  d: path("M6 5h2v14H6zm10 0h2v14h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.rmiziqbki {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM8 19H6V5h2zm6 0h-4V5h4zm4 0h-2V5h2z");
}
</style><path class="fm67x5emz"/><path class="rmiziqbki"/>`,
		"fallback": "ic:twotone-vertical-shades",
	});
}

export default Component;
