import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cwd4_tb1f {
  fill: currentColor;
  d: path("M236.24 44.24A6 6 0 0 0 232 34H24a6 6 0 0 0-4.24 10.24L122 146.49V210H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-63.51ZM70.49 78h115L128 135.51Zm147-32l-20 20h-139l-20-20Z");
}
</style><path class="cwd4_tb1f"/>`,
		"fallback": "ph:martini-light",
	});
}

export default Component;
