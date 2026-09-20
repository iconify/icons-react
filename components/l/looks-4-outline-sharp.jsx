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
		"content": `<style>.kupttsbtk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm8.5-2.5h1v-9h-1v4h-3v-4h-1v5h4z");
}
</style><path class="kupttsbtk"/>`,
		"fallback": "material-symbols-light:looks-4-outline-sharp",
	});
}

export default Component;
