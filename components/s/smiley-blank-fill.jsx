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
		"content": `<style>.ae01hkboe {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-36 96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="ae01hkboe"/>`,
		"fallback": "ph:smiley-blank-fill",
	});
}

export default Component;
