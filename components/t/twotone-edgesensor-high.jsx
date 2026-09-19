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
		"content": `<style>.h4q1f9jpc {
  fill: currentColor;
  d: path("M16 2.01L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 20H8v-1h8zm0-3H8V7h8zm0-12H8V4h8zm3 5h2v7h-2zm3-3h2v7h-2zM3 7h2v7H3zm-3 3h2v7H0z");
}

.hkkq5ibbg {
  fill: currentColor;
  d: path("M8 4h8v1H8zm0 15h8v1H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="hkkq5ibbg"/><path class="h4q1f9jpc"/>`,
		"fallback": "ic:twotone-edgesensor-high",
	});
}

export default Component;
