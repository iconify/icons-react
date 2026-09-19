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
		"content": `<style>.sw4hhxbzz {
  fill: currentColor;
  d: path("M8.5 8.62v6.76L5.12 12z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.td2kkx1ph {
  fill: currentColor;
  d: path("M8.5 8.62v6.76L5.12 12zM10 5l-7 7l7 7zm4 0v14l7-7z");
}
</style><path class="sw4hhxbzz"/><path class="td2kkx1ph"/>`,
		"fallback": "ic:twotone-switch-left",
	});
}

export default Component;
