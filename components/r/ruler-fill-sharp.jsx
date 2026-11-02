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
		"content": `<style>.pnrtbvbie {
  fill: currentColor;
  d: path("M13.707 4.293L13 3.586l1.293-1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414L3.586 13l2.707 2.707a.999.999 0 1 0 1.414-1.414l-.586-.586l-.001-.001L5 11.586L7.586 9l2.707 2.707a.999.999 0 1 0 1.414-1.414L9 7.586L11.586 5l2.707 2.707a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="pnrtbvbie"/>`,
		"fallback": "coolicons:ruler-fill-sharp",
	});
}

export default Component;
