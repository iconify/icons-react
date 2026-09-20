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
		"content": `<style>.flr6n9msp {
  fill: currentColor;
  d: path("m6.885 15.308l2.134-8.174h1.539V5.788L11.788 3h.424l1.25 2.789v1.346H15l2.135 8.173zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="flr6n9msp"/>`,
		"fallback": "material-symbols-light:stylus-pen-sharp",
	});
}

export default Component;
