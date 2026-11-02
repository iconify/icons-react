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
		"content": `<style>.gk7j3qb_v {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414L15 16.414V20a1.002 1.002 0 0 1-1.707.707L9.586 17H6a1 1 0 0 1-1-1V8a1 1 0 0 1 .649-.936L1.293 2.707a.999.999 0 1 1 1.414-1.414m7.707 4.879l2.879-2.879A1 1 0 0 1 15 4v6.757Z");
}
</style><path class="gk7j3qb_v"/>`,
		"fallback": "coolicons:volume-off-fill-sharp",
	});
}

export default Component;
