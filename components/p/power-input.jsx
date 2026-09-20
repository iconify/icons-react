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
		"content": `<style>.xeeqhccob {
  fill: currentColor;
  d: path("M2 15v-2h5v2zm0-4V9h19v2zm7 4v-2h5v2zm7 0v-2h5v2z");
}
</style><path class="xeeqhccob"/>`,
		"fallback": "material-symbols:power-input",
	});
}

export default Component;
