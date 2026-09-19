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
		"content": `<style>.w55_i4b8j {
  fill: currentColor;
  d: path("M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78a.99.99 0 0 0-1.22 0a.997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01a.99.99 0 0 0-1.22 0zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01");
}
</style><path class="w55_i4b8j"/>`,
		"fallback": "ic:round-layers",
	});
}

export default Component;
