import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vlg8u8b7e {
  fill: currentColor;
  d: path("M224 96.8V96a56.06 56.06 0 0 0-56-56h-8a16 16 0 0 0-16 16v120h-16V72a8 8 0 0 0-8-8H16A16 16 0 0 0 0 80v104a32 32 0 0 0 56 21.13A32 32 0 0 0 111 192h82a32 32 0 0 0 63-8v-48a40.07 40.07 0 0 0-32-39.2M160 56h8a40 40 0 0 1 40 40v8a8 8 0 0 0 8 8a24 24 0 0 1 24 24v20.31a31.7 31.7 0 0 0-16-4.31a32.06 32.06 0 0 0-31 24h-33Zm-48 24v96h-1a32 32 0 0 0-55-13.13a31.9 31.9 0 0 0-40-6.56V80ZM32 200a16 16 0 1 1 16-16a16 16 0 0 1-16 16m48 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16m144 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="vlg8u8b7e"/>`,
		"fallback": "ph:truck-trailer",
	});
}

export default Component;
