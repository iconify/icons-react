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
		"content": `<style>.ab-ognd2p {
  fill: currentColor;
  d: path("M12.43 2.3a9.92 9.92 0 0 0-6.63.64c-.35.16-.41.64-.1.86C8.3 5.6 10 8.6 10 12s-1.7 6.4-4.3 8.2c-.32.22-.26.7.09.86c1.28.6 2.71.94 4.21.94c6.05 0 10.85-5.38 9.87-11.6c-.61-3.92-3.59-7.16-7.44-8.1");
}
</style><path class="ab-ognd2p"/>`,
		"fallback": "ic:round-brightness-2",
	});
}

export default Component;
