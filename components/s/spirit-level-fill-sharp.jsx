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
		"content": `<style>.hq_vs1bix {
  fill: currentColor;
  d: path("M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm6 3a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm8 0v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0m-5 4h2a2 2 0 1 0 0-4h-2a2 2 0 1 0 0 4");
}
</style><path class="hq_vs1bix"/>`,
		"fallback": "coolicons:spirit-level-fill-sharp",
	});
}

export default Component;
