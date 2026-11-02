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
		"content": `<style>.i6iqykjnx {
  fill: currentColor;
  d: path("M15.707 3.707L14.414 5H19a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V7h-3.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414M20 14v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H6v12h12v-5a1 1 0 0 1 2 0");
}
</style><path class="i6iqykjnx"/>`,
		"fallback": "coolicons:rotate-left-fill-sharp",
	});
}

export default Component;
