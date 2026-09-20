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
		"content": `<style>.ia16deadi {
  fill: currentColor;
  d: path("M3 20V7h6V4h6v3h6v13zm1-1h16V8H4zm6-12h4V5h-4zM4 19V8zm6-1.923l5.577-3.577L10 9.923z");
}
</style><path class="ia16deadi"/>`,
		"fallback": "material-symbols-light:shop-outline-sharp",
	});
}

export default Component;
