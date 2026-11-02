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
		"content": `<style>.qawi-zbwl {
  fill: currentColor;
  d: path("M16 3a.998.998 0 0 1 .97 1.243l-4 16a.999.999 0 1 1-1.94-.486L14.719 5H8a1 1 0 0 1 0-2Z");
}
</style><path class="qawi-zbwl"/>`,
		"fallback": "coolicons:number-7-bulk",
	});
}

export default Component;
