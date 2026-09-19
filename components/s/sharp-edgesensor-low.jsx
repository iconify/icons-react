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
		"content": `<style>.zp9x9evsj {
  fill: currentColor;
  d: path("M2 7h2v7H2zm18 3h2v7h-2zM6 2v20h12V2zm10 15H8V7h8z");
}
</style><path class="zp9x9evsj"/>`,
		"fallback": "ic:sharp-edgesensor-low",
	});
}

export default Component;
