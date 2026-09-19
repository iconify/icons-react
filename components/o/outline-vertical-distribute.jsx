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
		"content": `<style>.bmbk2pjqb {
  fill: currentColor;
  d: path("M22 2v2H2V2zM7 10.5v3h10v-3zM2 20v2h20v-2z");
}
</style><path class="bmbk2pjqb"/>`,
		"fallback": "ic:outline-vertical-distribute",
	});
}

export default Component;
