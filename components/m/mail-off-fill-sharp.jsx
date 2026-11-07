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
		"content": `<style>.h6yb-ib2v {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414L18.586 20H3a1 1 0 0 1-1-1V5a1 1 0 0 1 .649-.936L1.293 2.707a.999.999 0 1 1 1.414-1.414m11.707 8.879L8.243 4h12.343ZM21 6.414l1-1v12.343l-6.172-6.171Z");
}
</style><path class="h6yb-ib2v"/>`,
		"fallback": "coolicons:mail-off-fill-sharp",
	});
}

export default Component;
