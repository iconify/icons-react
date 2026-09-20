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
		"content": `<style>.us7v9qbqs {
  fill: currentColor;
  d: path("M2 21L6 3h12l4 18zm9-9.175V16h2v-4.175l1.6 1.575L16 12l-4-4l-4 4l1.4 1.425z");
}
</style><path class="us7v9qbqs"/>`,
		"fallback": "material-symbols:tilt-arrow-up-sharp",
	});
}

export default Component;
