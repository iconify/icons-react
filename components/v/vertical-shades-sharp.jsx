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
		"content": `<style>.bnkr6kbks {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm6.75-1h4.5V5h-4.5z");
}
</style><path class="bnkr6kbks"/>`,
		"fallback": "material-symbols-light:vertical-shades-sharp",
	});
}

export default Component;
