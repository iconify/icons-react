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
		"content": `<style>.kb7knmrfr {
  fill: currentColor;
  d: path("M21.99 2H2v16h16l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z");
}
</style><path class="kb7knmrfr"/>`,
		"fallback": "ic:sharp-comment",
	});
}

export default Component;
