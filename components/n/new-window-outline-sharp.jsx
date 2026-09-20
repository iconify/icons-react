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
		"content": `<style>.h10_rqlzb {
  fill: currentColor;
  d: path("M3 21V3h8v2H5v14h14v-6h2v8zm13-10V8h-3V6h3V3h2v3h3v2h-3v3z");
}
</style><path class="h10_rqlzb"/>`,
		"fallback": "material-symbols:new-window-outline-sharp",
	});
}

export default Component;
