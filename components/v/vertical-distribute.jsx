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
		"content": `<style>.bk5g6cc_t {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-8.5v-3h10v3zM2 4V2h20v2z");
}
</style><path class="bk5g6cc_t"/>`,
		"fallback": "material-symbols:vertical-distribute",
	});
}

export default Component;
