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
		"content": `<style>.hyxd6kb4z {
  fill: currentColor;
  d: path("M3 15.5h18V13H3zM3 11h18V8.5H3zm0-4.5h18V4H3zM21 21V3zM3 20h18v-2.5H3z");
}
</style><path class="hyxd6kb4z"/>`,
		"fallback": "material-symbols:table-rows-narrow-sharp",
	});
}

export default Component;
