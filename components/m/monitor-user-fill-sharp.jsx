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
		"content": `<style>.dirrvxb8j {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm6 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 7h6a1 1 0 0 0 1-1c0-.257-.075-.506-.209-.725C15.124 13.188 13.099 13 12 13s-3.124.188-3.791 1.275A1.4 1.4 0 0 0 8 15a1 1 0 0 0 1 1m0 3h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="dirrvxb8j"/>`,
		"fallback": "coolicons:monitor-user-fill-sharp",
	});
}

export default Component;
