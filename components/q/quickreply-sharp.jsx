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
		"content": `<style>.m2zhhvb8s {
  fill: currentColor;
  d: path("M19 23v-5h-2v-6h5l-1.7 4h2.2zM2 22V2h20v8h-7v8H6z");
}
</style><path class="m2zhhvb8s"/>`,
		"fallback": "material-symbols:quickreply-sharp",
	});
}

export default Component;
