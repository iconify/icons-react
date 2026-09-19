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
		"content": `<style>.pi6ybkbni {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z");
}
</style><path class="pi6ybkbni"/>`,
		"fallback": "ic:sharp-create-new-folder",
	});
}

export default Component;
