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
		"content": `<style>.udax7gwxi {
  fill: currentColor;
  d: path("M3 11V3h18v8zm0 10v-8h18v8zm2-2h14v-4H5z");
}
</style><path class="udax7gwxi"/>`,
		"fallback": "material-symbols:splitscreen-top-outline-sharp",
	});
}

export default Component;
