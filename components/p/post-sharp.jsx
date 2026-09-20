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
		"content": `<style>.rec5gmbbj {
  fill: currentColor;
  d: path("M3 21V3h18v18zm3-7h12v-2H6zm0 3h12v-1.5H6z");
}
</style><path class="rec5gmbbj"/>`,
		"fallback": "material-symbols:post-sharp",
	});
}

export default Component;
