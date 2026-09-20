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
		"content": `<style>.brltkubvg {
  fill: currentColor;
  d: path("M19 12.83V13a2.006 2.006 0 0 1-2 2H7a2.006 2.006 0 0 1-2-2v-.17a2 2 0 0 1 .59-1.42l1.82-1.82A2 2 0 0 1 8.83 9h6.34a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 1 .59 1.42");
}
</style><path class="brltkubvg"/>`,
		"fallback": "fluent:port-micro-usb-24-filled",
	});
}

export default Component;
