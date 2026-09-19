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
		"content": `<style>.yxm4o4e2n {
  fill: currentColor;
  d: path("m12 6l-2-2H2v16h20V6zm6 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2z");
}
</style><path class="yxm4o4e2n"/>`,
		"fallback": "ic:sharp-folder-zip",
	});
}

export default Component;
