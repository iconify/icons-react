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
		"content": `<style>.rv-ceeele {
  fill: currentColor;
  d: path("m5 21l-1-1l8-18l8 18l-1 1l-7-3z");
}
</style><path class="rv-ceeele"/>`,
		"fallback": "material-symbols:navigation-sharp",
	});
}

export default Component;
