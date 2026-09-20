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
		"content": `<style>.n73pcqbpt {
  fill: currentColor;
  d: path("M13 14v-3h-3V9h3V6h2v3h3v2h-3v3zM2 22V6h4V2h16v16h-4v4zm6-6h12V4H8z");
}
</style><path class="n73pcqbpt"/>`,
		"fallback": "material-symbols:shadow-add-outline-sharp",
	});
}

export default Component;
