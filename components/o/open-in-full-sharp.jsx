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
		"content": `<style>.ic8hjjbxv {
  fill: currentColor;
  d: path("M3 21v-8h2v4.6L17.6 5H13V3h8v8h-2V6.4L6.4 19H11v2z");
}
</style><path class="ic8hjjbxv"/>`,
		"fallback": "material-symbols:open-in-full-sharp",
	});
}

export default Component;
