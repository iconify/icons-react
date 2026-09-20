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
		"content": `<style>.w-dsi1pcv {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 14v153.52L54.49 46H208a2 2 0 0 1 2 2M46 208V54.48L201.51 210H48a2 2 0 0 1-2-2");
}
</style><path class="w-dsi1pcv"/>`,
		"fallback": "ph:placeholder-light",
	});
}

export default Component;
