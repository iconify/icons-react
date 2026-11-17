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
		"content": `<style>.azi1g3bsv {
  fill: currentColor;
  d: path("M4.293 6.293A1 1 0 0 1 6 7v10a1 1 0 0 1-2 0V9.414l-.293.293a.999.999 0 1 1-1.414-1.414ZM13 6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3v3h3a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3V8H9a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3h-2a1 1 0 0 1 0-2h2V8h-3a1 1 0 0 1 0-2Z");
}
</style><path class="azi1g3bsv"/>`,
		"fallback": "coolicons:numbers-fill-sharp",
	});
}

export default Component;
