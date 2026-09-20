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
		"content": `<style>.ymznbaboo {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m14.9-96.31a28 28 0 1 0-29.8 0a32 32 0 1 0 29.8 0M108 100a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 76a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="ymznbaboo"/>`,
		"fallback": "ph:number-circle-eight-thin",
	});
}

export default Component;
