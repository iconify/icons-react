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
		"content": `<style>.aukydqbke {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H2V4h2l2 2H3.15L.65 3.5l1.425-1.425l19.8 19.8zM22 19.15L15.85 13H19V7h-8v1.15L6.85 4H22z");
}
</style><path class="aukydqbke"/>`,
		"fallback": "material-symbols:picture-in-picture-off-sharp",
	});
}

export default Component;
