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
		"content": `<style>.k0h_hgbct {
  fill: currentColor;
  d: path("M7.48 19v-7.884q0-.672.473-1.144q.472-.472 1.143-.472h8.989l-2.1-2.1l.707-.708L20 10l-3.308 3.308l-.707-.708l2.1-2.1H9.096q-.269 0-.442.173t-.173.443V19z");
}
</style><path class="k0h_hgbct"/>`,
		"fallback": "material-symbols-light:turn-right-outline",
	});
}

export default Component;
