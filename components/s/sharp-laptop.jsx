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
		"content": `<style>.lc37yebvl {
  fill: currentColor;
  d: path("m20 18l2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z");
}
</style><path class="lc37yebvl"/>`,
		"fallback": "ic:sharp-laptop",
	});
}

export default Component;
