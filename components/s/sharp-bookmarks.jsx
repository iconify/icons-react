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
		"content": `<style>.jwzrstbgk {
  fill: currentColor;
  d: path("m19 18l2 1V1H7v2h12zM17 5H3v18l7-3l7 3z");
}
</style><path class="jwzrstbgk"/>`,
		"fallback": "ic:sharp-bookmarks",
	});
}

export default Component;
