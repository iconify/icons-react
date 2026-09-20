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
		"content": `<style>.pbxu_vb6p {
  fill: currentColor;
  d: path("M10 21v-8.25H3V21zm2 0h9v-8.25h-9zM3 10.75h18V3H3z");
}
</style><path class="pbxu_vb6p"/>`,
		"fallback": "material-symbols:team-dashboard-sharp",
	});
}

export default Component;
