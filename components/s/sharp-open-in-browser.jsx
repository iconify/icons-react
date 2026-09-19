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
		"content": `<style>.wi1156b9i {
  fill: currentColor;
  d: path("M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6l-4 4h3v6h2v-6h3z");
}
</style><path class="wi1156b9i"/>`,
		"fallback": "ic:sharp-open-in-browser",
	});
}

export default Component;
