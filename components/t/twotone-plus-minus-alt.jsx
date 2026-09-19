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
		"content": `<style>.yh7tekbxv {
  fill: currentColor;
  d: path("M12 7.998H8v4H6v-4H2v-2h4v-4h2v4h4zm10 10h-8v-2h8zM18.5 4L4 18.5L5.5 20L20 5.5z");
}
</style><path class="yh7tekbxv"/>`,
		"fallback": "ic:twotone-plus-minus-alt",
	});
}

export default Component;
