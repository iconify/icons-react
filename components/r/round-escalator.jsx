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
		"content": `<style>.rtrwuu48x {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 6h-1.7l-4.71 8.49c-.18.31-.52.51-.88.51H7c-.83 0-1.5-.67-1.5-1.5S6.17 15 7 15h1.7l4.71-8.49c.18-.31.52-.51.88-.51H17c.83 0 1.5.67 1.5 1.5S17.83 9 17 9");
}
</style><path class="rtrwuu48x"/>`,
		"fallback": "ic:round-escalator",
	});
}

export default Component;
