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
		"content": `<style>.rwb58k66i {
  fill: currentColor;
  d: path("M8 6.099V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.099A5.01 5.01 0 0 1 20 11v6c0 1.32-.866 2.487-2.128 2.872a3 3 0 0 1-5.701.128h-.342a3 3 0 0 1-5.7-.128A3.005 3.005 0 0 1 4 17v-6a5.01 5.01 0 0 1 4-4.901M14 4h-4v2h4ZM9.705 19.709l.002-.002l.002-.002a1 1 0 0 0-.002-1.412l-.002-.002a1 1 0 1 0 0 1.418m4.588-.002l.002.002a1 1 0 1 0 0-1.418l-.002.002l-.002.002a1 1 0 0 0 .002 1.412");
}
</style><path class="rwb58k66i"/>`,
		"fallback": "coolicons:luggage-fill-round",
	});
}

export default Component;
