import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j2xw61gbe {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m7.417 56.999C45.089 54.138 49 43.876 49 32S45.089 9.862 39.417 5.001C51.28 8.252 60 19.104 60 32s-8.72 23.748-20.583 26.999");
}
</style><path class="j2xw61gbe"/>`,
		"fallback": "emojione-monotone:waxing-crescent-moon",
	});
}

export default Component;
