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
		"content": `<style>.pgmo6izin {
  fill: currentColor;
  d: path("M22 8h-4a4 4 0 0 0 0 8h4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5m-4 6a2 2 0 1 1 0-4h4v4Zm0-3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="pgmo6izin"/>`,
		"fallback": "coolicons:wallet-fill-round",
	});
}

export default Component;
