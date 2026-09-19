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
		"content": `<style>.ma2gm4bcb {
  fill: currentColor;
  d: path("M21.6 18.2L13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75c-1.76-.4-3.37.53-4.02 1.98c-.3.67.18 1.43.91 1.43c.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 12 6c.83 0 1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5c-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5l6 4.5z");
}
</style><path class="ma2gm4bcb"/>`,
		"fallback": "ic:round-checkroom",
	});
}

export default Component;
