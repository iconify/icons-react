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
		"content": `<style>.pe8fnhb4y {
  fill: currentColor;
  d: path("M7.5 13.308h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077z");
}
</style><path class="pe8fnhb4y"/>`,
		"fallback": "material-symbols-light:mms",
	});
}

export default Component;
