import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gjapu0_pq {
  fill: currentColor;
  d: path("M2.146 2.147a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.707.707L15.293 16H2.5a.5.5 0 1 1 0-1h11.793l-1-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.389-1.904L2.146 2.854a.5.5 0 0 1 0-.707M15 5a2 2 0 0 1 2 2v5c0 .78-.447 1.452-1.097 1.782l-.789-.789A1 1 0 0 0 16 12V7a1 1 0 0 0-1-1H8.121l-1-1zM5 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7.293l-7-7z");
}
</style><path class="gjapu0_pq"/>`,
		"fallback": "fluent:laptop-off-20-regular",
	});
}

export default Component;
