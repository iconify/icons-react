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
		"content": `<style>.hq-ssopum {
  fill: currentColor;
  d: path("M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2zM4 16V6h16v10.01zm9-6.87c-3.89.54-5.44 3.2-6 5.87c1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7z");
}

.iddg9xsyl {
  fill: currentColor;
  d: path("M20 16V6H4v10.01zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V7l4 3.73z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="iddg9xsyl"/><path class="hq-ssopum"/>`,
		"fallback": "ic:twotone-screen-share",
	});
}

export default Component;
