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
		"content": `<style>.rls14db7s {
  fill: currentColor;
  d: path("M2 9a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Zm5.707-.707a.999.999 0 1 0-1.414 1.414L8.586 12l-2.293 2.293a.999.999 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414ZM13 14a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z");
}
</style><path class="rls14db7s"/>`,
		"fallback": "coolicons:terminal-fill-round",
	});
}

export default Component;
