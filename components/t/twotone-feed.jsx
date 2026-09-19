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
		"content": `<style>.bsb696bit {
  fill: currentColor;
  d: path("M15 5H5v14h14V9h-4zM7 7h5v2H7zm10 10H7v-2h10zm0-6v2H7v-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.oc--z5bfw {
  fill: currentColor;
  d: path("M7 13h10v-2H7zm0 4h10v-2H7zm9-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm3 16H5V5h10v4h4zM12 7H7v2h5z");
}
</style><path class="bsb696bit"/><path class="oc--z5bfw"/>`,
		"fallback": "ic:twotone-feed",
	});
}

export default Component;
