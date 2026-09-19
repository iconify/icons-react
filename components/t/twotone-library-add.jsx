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
		"content": `<style>.l14kt8brg {
  fill: currentColor;
  d: path("M8 16h12V4H8zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xq9oxjbzl {
  fill: currentColor;
  d: path("M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z");
}
</style><path class="l14kt8brg"/><path class="xq9oxjbzl"/>`,
		"fallback": "ic:twotone-library-add",
	});
}

export default Component;
