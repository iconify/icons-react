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
		"content": `<style>.h4pm-6_gh {
  fill: currentColor;
  d: path("M5.5 18V6h2v12zm13 0l-9-6l9-6z");
}
</style><path class="h4pm-6_gh"/>`,
		"fallback": "material-symbols:skip-previous",
	});
}

export default Component;
