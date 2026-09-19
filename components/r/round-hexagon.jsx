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
		"content": `<style>.v1olohblh {
  fill: currentColor;
  d: path("M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1");
}
</style><path class="v1olohblh"/>`,
		"fallback": "ic:round-hexagon",
	});
}

export default Component;
