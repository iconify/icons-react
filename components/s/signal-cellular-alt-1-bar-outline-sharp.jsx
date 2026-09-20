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
		"content": `<style>.sdy3bxb_e {
  fill: currentColor;
  d: path("M5 20v-6h3v6z");
}
</style><path class="sdy3bxb_e"/>`,
		"fallback": "material-symbols:signal-cellular-alt-1-bar-outline-sharp",
	});
}

export default Component;
