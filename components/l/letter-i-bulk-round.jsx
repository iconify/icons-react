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
		"content": `<style>.rfmkfizvb {
  fill: currentColor;
  d: path("M12 3h3a1 1 0 0 1 0 2h-2v14h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2V5H9a1 1 0 0 1 0-2Z");
}
</style><path class="rfmkfizvb"/>`,
		"fallback": "coolicons:letter-i-bulk-round",
	});
}

export default Component;
