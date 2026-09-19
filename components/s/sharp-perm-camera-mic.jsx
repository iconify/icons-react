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
		"content": `<style>.tp5992yjt {
  fill: currentColor;
  d: path("M22 5h-5.17L15 3H9L7.17 5H2v16h9v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h9zm-8 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2z");
}
</style><path class="tp5992yjt"/>`,
		"fallback": "ic:sharp-perm-camera-mic",
	});
}

export default Component;
