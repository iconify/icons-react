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
		"content": `<style>.zuepjb6mc {
  fill: currentColor;
  d: path("M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z");
}
</style><path class="zuepjb6mc"/>`,
		"fallback": "ic:sharp-format-paint",
	});
}

export default Component;
