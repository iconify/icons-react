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
		"content": `<style>.x9z5dj2hl {
  fill: currentColor;
  d: path("M5 17V3h18v14zm-4 4V6.5h2V19h16.5v2zm13-8.725l7-4.85V5l-7 4.85L7 5v2.425z");
}
</style><path class="x9z5dj2hl"/>`,
		"fallback": "material-symbols:stacked-email-sharp",
	});
}

export default Component;
