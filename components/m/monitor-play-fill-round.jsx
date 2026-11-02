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
		"content": `<style>.zfd44acxs {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm6-1v6a.998.998 0 0 0 1.6.8l4-3a1 1 0 0 0 0-1.6l-4-3A.999.999 0 0 0 9 7m0 12h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="zfd44acxs"/>`,
		"fallback": "coolicons:monitor-play-fill-round",
	});
}

export default Component;
