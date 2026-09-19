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
		"content": `<style>.bjbh-w5vd {
  fill: currentColor;
  d: path("M11 14h2v-3h3l-4-4l-4 4h3z");
}

.pl6igzb1y {
  fill: currentColor;
  d: path("M12 18c-1.63 0-3.06-.79-3.98-2H5v3h14v-3h-3.02c-.92 1.21-2.35 2-3.98 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uyfknjbjc {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19zm0-5h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14z");
}
</style><path class="pl6igzb1y"/><path class="bjbh-w5vd"/><path class="uyfknjbjc"/>`,
		"fallback": "ic:twotone-outbox",
	});
}

export default Component;
