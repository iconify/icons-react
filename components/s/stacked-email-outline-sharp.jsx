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
		"content": `<style>.okh-4ob0g {
  fill: currentColor;
  d: path("M5 17V3h18v14zm9-4.725l-7-4.85V15h14V7.425zm0-2.425L21 5H7zM1 21V6.5h2V19h16.5v2zM21 5H7z");
}
</style><path class="okh-4ob0g"/>`,
		"fallback": "material-symbols:stacked-email-outline-sharp",
	});
}

export default Component;
