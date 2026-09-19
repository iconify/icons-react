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
		"content": `<style>.e0xw4_bwl {
  fill: currentColor;
  d: path("M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z");
}
</style><path class="e0xw4_bwl"/>`,
		"fallback": "ic:twotone-text-fields",
	});
}

export default Component;
