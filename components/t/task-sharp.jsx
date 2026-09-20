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
		"content": `<style>.w3fmbmbpc {
  fill: currentColor;
  d: path("m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="w3fmbmbpc"/>`,
		"fallback": "material-symbols-light:task-sharp",
	});
}

export default Component;
