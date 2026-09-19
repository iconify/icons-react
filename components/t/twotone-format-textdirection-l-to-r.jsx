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
		"content": `<style>.caxvf9y_w {
  fill: currentColor;
  d: path("M9 8V4c-1.1 0-2 .9-2 2s.9 2 2 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.o4igdjb0e {
  fill: currentColor;
  d: path("M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4m0-6v4c-1.1 0-2-.9-2-2s.9-2 2-2m12 14l-4-4v3H5v2h12v3z");
}
</style><path class="caxvf9y_w"/><path class="o4igdjb0e"/>`,
		"fallback": "ic:twotone-format-textdirection-l-to-r",
	});
}

export default Component;
