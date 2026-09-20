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
		"content": `<style>.nj38kxdbi {
  fill: currentColor;
  d: path("M5 15h12V7H5zm-3 5V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="nj38kxdbi"/>`,
		"fallback": "material-symbols:magnification-large-outline-sharp",
	});
}

export default Component;
