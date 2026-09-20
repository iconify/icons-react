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
		"content": `<style>.o-1lfgblo {
  fill: currentColor;
  d: path("M3 21v-8h18v8zm0-10V3h18v8zm16-6H5v4h14z");
}
</style><path class="o-1lfgblo"/>`,
		"fallback": "material-symbols:splitscreen-bottom-sharp",
	});
}

export default Component;
