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
		"content": `<style>.t9xj4sbum {
  fill: currentColor;
  d: path("M10.95 14.858L15.908 9.9l-.714-.713l-4.244 4.244l-2.138-2.139l-.714.714zM12 20.96q-3.013-.894-5.007-3.65T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963");
}
</style><path class="t9xj4sbum"/>`,
		"fallback": "material-symbols-light:verified-user-sharp",
	});
}

export default Component;
