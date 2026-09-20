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
		"content": `<style>.ytmse-i6o {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m-20-104a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="ytmse-i6o"/>`,
		"fallback": "ph:smiley-blank-bold",
	});
}

export default Component;
