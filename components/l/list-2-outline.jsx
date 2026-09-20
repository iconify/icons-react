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
		"content": `<style>.d66s69kcq {
  fill: currentColor;
  d: path("M7 18v-2h10v2zm-4-5v-2h18v2zm4-5V6h10v2z");
}
</style><path class="d66s69kcq"/>`,
		"fallback": "material-symbols:list-2-outline",
	});
}

export default Component;
