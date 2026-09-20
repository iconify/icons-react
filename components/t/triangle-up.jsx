import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mvil45bfh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 7.002L5.963 14h8.074zm.866-2.5a1 1 0 0 0-1.732 0L3.365 14.5a1 1 0 0 0 .866 1.5H15.77a1 1 0 0 0 .866-1.5z");
}
</style><path clip-rule="evenodd" class="mvil45bfh"/>`,
		"fallback": "pepicons-pop:triangle-up",
	});
}

export default Component;
