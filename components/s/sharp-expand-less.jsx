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
		"content": `<style>.bpb10db7x {
  fill: currentColor;
  d: path("m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z");
}
</style><path class="bpb10db7x"/>`,
		"fallback": "ic:sharp-expand-less",
	});
}

export default Component;
