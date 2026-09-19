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

.tmj5jbc6e {
  fill: currentColor;
  d: path("M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m3.44-8c.26.45.44.96.51 1.5h-7.9c.07-.54.24-1.05.51-1.5zm.51 2.5c-.07.54-.24 1.05-.51 1.5H8.56c-.26-.45-.44-.96-.51-1.5zM9.38 15h5.24c-.7.61-1.61 1-2.62 1s-1.91-.39-2.62-1m5.24-6H9.38c.7-.61 1.61-1 2.62-1s1.91.39 2.62 1");
}
</style><path class="bn6ebpb5p"/><path class="tmj5jbc6e"/>`,
		"fallback": "ic:outline-hvac",
	});
}

export default Component;
