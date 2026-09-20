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
		"content": `<style>.u4jwzsb1v {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3L7 5.15q-.075-.875.525-1.513T9 3h6q.875 0 1.475.637T17 5.15L16 18zm1.85-2h4.3L15 5H9zm0-11H9h6z");
}
</style><path class="u4jwzsb1v"/>`,
		"fallback": "material-symbols:on-hub-device-outline",
	});
}

export default Component;
