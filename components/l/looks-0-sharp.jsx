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
		"content": `<style>.kyaxh5yvi {
  fill: currentColor;
  d: path("M4 20V4h16v16zm5.5-3.5h5v-9h-5zm1-1v-7h3v7z");
}
</style><path class="kyaxh5yvi"/>`,
		"fallback": "material-symbols-light:looks-0-sharp",
	});
}

export default Component;
