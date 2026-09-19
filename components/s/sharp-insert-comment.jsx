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
		"content": `<style>.oaun0fbwx {
  fill: currentColor;
  d: path("M22 2H2v16h16l4 4zm-4 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z");
}
</style><path class="oaun0fbwx"/>`,
		"fallback": "ic:sharp-insert-comment",
	});
}

export default Component;
