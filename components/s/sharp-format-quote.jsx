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
		"content": `<style>.gn9jv4_gz {
  fill: currentColor;
  d: path("M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z");
}
</style><path class="gn9jv4_gz"/>`,
		"fallback": "ic:sharp-format-quote",
	});
}

export default Component;
