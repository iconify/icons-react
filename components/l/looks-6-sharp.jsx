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
		"content": `<style>.yicufynlv {
  fill: currentColor;
  d: path("M10.5 11.5v-3h3v-1h-4v9h5v-5zm0 1h3v3h-3zM4 20V4h16v16z");
}
</style><path class="yicufynlv"/>`,
		"fallback": "material-symbols-light:looks-6-sharp",
	});
}

export default Component;
