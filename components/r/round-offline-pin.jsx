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
		"content": `<style>.m4e0kbcea {
  fill: currentColor;
  d: path("M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 16H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-6.41-4.71L7.7 11.4a.984.984 0 0 1 0-1.4a.984.984 0 0 1 1.4 0l1.2 1.2l4.6-4.6a.984.984 0 0 1 1.4 0c.39.39.39 1.01 0 1.4l-5.29 5.29c-.39.39-1.03.39-1.42 0");
}
</style><path class="m4e0kbcea"/>`,
		"fallback": "ic:round-offline-pin",
	});
}

export default Component;
