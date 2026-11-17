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
		"content": `<style>.vap8yebch {
  fill: currentColor;
  d: path("M3 3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm4 8a1 1 0 0 0 .2.6a6 6 0 0 0 9.6 0a1 1 0 0 0 .2-.6V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Zm8 5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="vap8yebch"/>`,
		"fallback": "coolicons:inverter-fill-sharp",
	});
}

export default Component;
