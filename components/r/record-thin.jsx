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
		"content": `<style>.ylgwxnb5l {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m0-160a68 68 0 1 0 68 68a68.07 68.07 0 0 0-68-68m0 128a60 60 0 1 1 60-60a60.07 60.07 0 0 1-60 60");
}
</style><path class="ylgwxnb5l"/>`,
		"fallback": "ph:record-thin",
	});
}

export default Component;
