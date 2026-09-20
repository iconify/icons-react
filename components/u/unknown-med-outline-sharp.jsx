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
		"content": `<style>.ttpw3gb6h {
  fill: currentColor;
  d: path("M2 13v-3h9v3zm11 0v-3h9v3z");
}
</style><path class="ttpw3gb6h"/>`,
		"fallback": "material-symbols:unknown-med-outline-sharp",
	});
}

export default Component;
