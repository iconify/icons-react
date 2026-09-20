import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.okl8mz8ny {
  fill: currentColor;
  d: path("M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-40V88a16 16 0 0 0-16-16V32h8a48.05 48.05 0 0 1 48 48m-56 56h-16V88h16v23.9a.5.5 0 0 0 0 .2ZM112 32h8v40a16 16 0 0 0-16 16v16H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h40v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-16h40v56a48.05 48.05 0 0 1-48 48");
}
</style><path class="okl8mz8ny"/>`,
		"fallback": "ph:mouse-middle-click",
	});
}

export default Component;
