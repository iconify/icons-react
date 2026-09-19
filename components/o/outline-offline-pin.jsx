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
		"content": `<style>.gtqi5iynl {
  fill: currentColor;
  d: path("M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-5-5h10v2H7zm3.3-3.8L8.4 9.3L7 10.7l3.3 3.3L17 7.3l-1.4-1.4z");
}
</style><path class="gtqi5iynl"/>`,
		"fallback": "ic:outline-offline-pin",
	});
}

export default Component;
