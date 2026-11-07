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
		"content": `<style>.b3crwgblo {
  fill: currentColor;
  d: path("M4 20V4h16v16zm6.5-3.5h4v-9h-5v5h4v3h-3zm3-5h-3v-3h3z");
}
</style><path class="b3crwgblo"/>`,
		"fallback": "material-symbols-light:looks-9-sharp",
	});
}

export default Component;
