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
		"content": `<style>.pgk8ipbhh {
  fill: currentColor;
  d: path("m12 10.586l6.293-6.293a.999.999 0 1 1 1.414 1.414L13 12.414v4.172l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 16.586v-4.172L4.293 5.707a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="pgk8ipbhh"/>`,
		"fallback": "coolicons:merge-bulk",
	});
}

export default Component;
