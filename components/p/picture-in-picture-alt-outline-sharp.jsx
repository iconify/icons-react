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
		"content": `<style>.kf-f7wbzk {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm7-1h8v-6h-8zm2-2v-2h4v2z");
}
</style><path class="kf-f7wbzk"/>`,
		"fallback": "material-symbols:picture-in-picture-alt-outline-sharp",
	});
}

export default Component;
