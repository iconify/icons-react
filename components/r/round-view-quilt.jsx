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
		"content": `<style>.e19kzaczs {
  fill: currentColor;
  d: path("M21 6v4.5c0 .55-.45 1-1 1h-9.67c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H20c.55 0 1 .45 1 1m-6.33 12v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1m1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1M8.33 18V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1");
}
</style><path class="e19kzaczs"/>`,
		"fallback": "ic:round-view-quilt",
	});
}

export default Component;
