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
		"content": `<style>.ra_odxw9j {
  fill: currentColor;
  d: path("M6 16V6h12v10zm-4 4v-2h18V4h2v16z");
}
</style><path class="ra_odxw9j"/>`,
		"fallback": "material-symbols:picture-in-picture-large-outline-sharp",
	});
}

export default Component;
