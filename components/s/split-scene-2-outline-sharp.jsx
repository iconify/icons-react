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
		"content": `<style>.mo2mxhbpb {
  fill: currentColor;
  d: path("M4 21v-6h2v4h12v-4h2v6zm-2-8v-2h2V3h16v8h2v2zm4-2h12V5H6zm12 8H6zm0-14H6z");
}
</style><path class="mo2mxhbpb"/>`,
		"fallback": "material-symbols:split-scene-2-outline-sharp",
	});
}

export default Component;
