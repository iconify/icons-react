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
		"content": `<style>.ehkk5bc9y {
  fill: currentColor;
  d: path("M5 11h4V7H5zm-3 9V4h20v16z");
}
</style><path class="ehkk5bc9y"/>`,
		"fallback": "material-symbols:magnification-small-sharp",
	});
}

export default Component;
