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
		"content": `<style>.bozixybsr {
  fill: currentColor;
  d: path("M12.293 4.293a5.243 5.243 0 0 1 7.414 7.414l-8 8a5.243 5.243 0 0 1-7.414-7.414ZM15 13.586l3.293-3.293a3.243 3.243 0 0 0-4.586-4.586L10.414 9Z");
}
</style><path class="bozixybsr"/>`,
		"fallback": "coolicons:pill-fill-sharp",
	});
}

export default Component;
