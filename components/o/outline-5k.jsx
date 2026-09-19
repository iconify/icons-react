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
		"content": `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.zvf3x5bmp {
  fill: currentColor;
  d: path("M11 14v-1.5c0-.55-.45-1-1-1H8v-1h3V9H6.5v3.5h3v1h-3V15H10c.55 0 1-.45 1-1m3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z");
}
</style><path class="bn6ebpb5p"/><path class="zvf3x5bmp"/>`,
		"fallback": "ic:outline-5k",
	});
}

export default Component;
