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
		"content": `<style>.q6039yb4g {
  fill: currentColor;
  d: path("M2 20V4h14l6 8l-6 8zm2-2h11l4.5-6L15 6H4zm7.75-6");
}
</style><path class="q6039yb4g"/>`,
		"fallback": "material-symbols:label-outline-sharp",
	});
}

export default Component;
