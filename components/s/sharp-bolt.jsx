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
		"content": `<style>.q6naq-7ae {
  fill: currentColor;
  d: path("M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z");
}
</style><path class="q6naq-7ae"/>`,
		"fallback": "ic:sharp-bolt",
	});
}

export default Component;
