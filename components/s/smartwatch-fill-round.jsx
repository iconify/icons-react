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
		"content": `<style>.m542cpb6m {
  fill: currentColor;
  d: path("M8 5.416V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v.416A5 5 0 0 1 19 10v4c0 1.99-1.175 3.79-3 4.584V19a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-.416A5 5 0 0 1 5 14v-4c0-1.99 1.175-3.79 3-4.584M14 5a.997.997 0 0 0-1-1h-2a.997.997 0 0 0-1 1Zm-3 15h2a1 1 0 0 0 1-1h-4a1 1 0 0 0 1 1");
}
</style><path class="m542cpb6m"/>`,
		"fallback": "coolicons:smartwatch-fill-round",
	});
}

export default Component;
