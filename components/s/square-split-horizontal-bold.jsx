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
		"content": `<style>.eeksrsb2m {
  fill: currentColor;
  d: path("M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M60 60h56v136H60Zm136 136h-56V60h56Z");
}
</style><path class="eeksrsb2m"/>`,
		"fallback": "ph:square-split-horizontal-bold",
	});
}

export default Component;
