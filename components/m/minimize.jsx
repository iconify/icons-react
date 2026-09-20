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
		"content": `<style>.qt2fe3thc {
  fill: currentColor;
  d: path("M6.5 20v-1h11v1z");
}
</style><path class="qt2fe3thc"/>`,
		"fallback": "material-symbols-light:minimize",
	});
}

export default Component;
