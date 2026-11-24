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
		"content": `<style>.wm5m_5bab {
  fill: currentColor;
  d: path("M6 3h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1.01 3H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 18c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1Zm-3-5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a4 4 0 0 1 0-8Zm-1.99 3H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="wm5m_5bab"/>`,
		"fallback": "coolicons:server-edit-corner-fill-round",
	});
}

export default Component;
