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
		"content": `<style>.mxyzjma9u {
  fill: currentColor;
  d: path("M23.32 16.67a16.4 16.4 0 0 0-11.31-4.51c-4.39 0-8.37 1.72-11.31 4.51l-.69.69L3.65 21l3.93-2.72l-.01-3.49c1.4-.45 2.9-.7 4.44-.7c1.55 0 3.04.24 4.44.7l-.01 3.49L20.37 21l3.64-3.64c0-.01-.52-.52-.69-.69M7 6.43l4.94 4.94l7.07-7.07l-1.41-1.42l-5.66 5.66L8.4 5H11V3H5v6h2z");
}
</style><path class="mxyzjma9u"/>`,
		"fallback": "ic:sharp-phone-missed",
	});
}

export default Component;
