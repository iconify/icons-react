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
		"content": `<style>.ppeagqbhq {
  fill: currentColor;
  d: path("M7 20h10v-2h-2v-7h-2V9h4V7H7v2h2v7h2v2H7zm-2 2v-6h2v-5H5V5h5V4H9V2h6v2h-1v1h5v6h-2v5h2v6zm7-8.5");
}
</style><path class="ppeagqbhq"/>`,
		"fallback": "material-symbols:water-bottle-large-outline-sharp",
	});
}

export default Component;
