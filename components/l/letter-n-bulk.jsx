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
		"content": `<style>.de_v7eb0n {
  fill: currentColor;
  d: path("M6 4a1 1 0 0 1 1.848-.53L16 16.513V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1.848.53L8 7.487V20a1 1 0 0 1-2 0Z");
}
</style><path class="de_v7eb0n"/>`,
		"fallback": "coolicons:letter-n-bulk",
	});
}

export default Component;
