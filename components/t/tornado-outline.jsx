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
		"content": `<style>.n5ip3tbvz {
  fill: currentColor;
  d: path("M1 3h22L12 22zm3.475 2L6.2 8h11.6l1.725-3zm2.9 5L9.1 13h5.8l1.725-3zm2.9 5L12 18l1.725-3z");
}
</style><path class="n5ip3tbvz"/>`,
		"fallback": "material-symbols:tornado-outline",
	});
}

export default Component;
