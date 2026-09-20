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
		"content": `<style>.dns9ft5yp {
  fill: currentColor;
  d: path("M11 16h2v-3h3v-2h-3V8h-2v3H8v2h3zm-9 4V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="dns9ft5yp"/>`,
		"fallback": "material-symbols:rectangle-add-outline-sharp",
	});
}

export default Component;
