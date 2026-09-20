import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s3z99nbme {
  fill: currentColor;
  d: path("M7 17H6a3 3 0 0 1-3-3v-1h4zm10-3a3 3 0 0 1-3 3H8v-4h9zM7 12H3V6a3 3 0 0 1 3-3h1zm7-9a3 3 0 0 1 3 3v6H8V3z");
}
</style><path class="s3z99nbme"/>`,
		"fallback": "fluent:layout-dynamic-20-filled",
	});
}

export default Component;
