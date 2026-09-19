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
		"content": `<style>.n8fjy-48u {
  fill: currentColor;
  d: path("m21.9 21.9l-8.49-8.49L3 3l-.9-.9L.69 3.51L3 5.83V21h15.17l2.31 2.31zM5 18l3.5-4.5l2.5 3.01L12.17 15l3 3zm16 .17L5.83 3H21z");
}
</style><path class="n8fjy-48u"/>`,
		"fallback": "ic:sharp-image-not-supported",
	});
}

export default Component;
