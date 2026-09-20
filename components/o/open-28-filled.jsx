import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rqlz4ti2q {
  fill: currentColor;
  d: path("M7 5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5a1 1 0 1 1 2 0V21a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h4.5a1 1 0 1 1 0 2zm8.5-1a1 1 0 0 1 1-1H24a1 1 0 0 1 1 1v7.5a1 1 0 1 1-2 0V6.414l-5.793 5.793a1 1 0 1 1-1.414-1.414L21.586 5H16.5a1 1 0 0 1-1-1");
}
</style><path class="rqlz4ti2q"/>`,
		"fallback": "fluent:open-28-filled",
	});
}

export default Component;
