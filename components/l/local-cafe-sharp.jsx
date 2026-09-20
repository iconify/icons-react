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
		"content": `<style>.b08-0mbcp {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm0-4V3h18v7h-4v7zm14-9h2V5h-2z");
}
</style><path class="b08-0mbcp"/>`,
		"fallback": "material-symbols:local-cafe-sharp",
	});
}

export default Component;
