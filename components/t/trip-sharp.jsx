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
		"content": `<style>.cup2v--mh {
  fill: currentColor;
  d: path("M18 21V6h4v15zM10 6h4V4h-4zM8 21V2h8v19zm-6 0V6h4v15z");
}
</style><path class="cup2v--mh"/>`,
		"fallback": "material-symbols:trip-sharp",
	});
}

export default Component;
