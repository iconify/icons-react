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
		"content": `<style>.vbnn7qwwz {
  fill: currentColor;
  d: path("M9 19v-2h6.6L4 5.4L5.4 4L17 15.6V9h2v10z");
}
</style><path class="vbnn7qwwz"/>`,
		"fallback": "material-symbols:south-east-sharp",
	});
}

export default Component;
