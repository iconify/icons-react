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
		"content": `<style>.m524kblfe {
  fill: currentColor;
  d: path("M19 3H5.01c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3.99 7.5c0 .83-.67 1.5-1.5 1.5c.83 0 1.5.67 1.5 1.5V15a2 2 0 0 1-2 2H10c-.55 0-1-.45-1-1s.45-1 1-1h3.01L13 13h-1c-.55 0-1-.45-1-1s.45-1 1-1h1l.01-2H10c-.55 0-.99-.45-.99-1s.44-1 .99-1h3.01c1.1 0 2 .9 2 2z");
}
</style><path class="m524kblfe"/>`,
		"fallback": "ic:round-looks-3",
	});
}

export default Component;
