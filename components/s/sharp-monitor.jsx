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
		"content": `<style>.zdzxtab2f {
  fill: currentColor;
  d: path("M22 3H2v15h5l-1 1v2h12v-2l-1-1h5zm-2 13H4V5h16z");
}
</style><path class="zdzxtab2f"/>`,
		"fallback": "ic:sharp-monitor",
	});
}

export default Component;
