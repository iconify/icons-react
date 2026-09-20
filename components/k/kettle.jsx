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
		"content": `<style>.crrc8-jsf {
  fill: currentColor;
  d: path("M7 17.846V6.327L4.5 3h12.885v3h2q.666 0 1.14.475T21 7.615v5q0 .667-.475 1.141t-1.14.475h-2v3.615zm10.385-4.615h2q.269 0 .442-.173t.173-.442v-5q0-.27-.173-.443T19.385 7h-2zm-4.616 1.846h1.847V5.769h-1.847zM4 21v-1h16v1z");
}
</style><path class="crrc8-jsf"/>`,
		"fallback": "material-symbols-light:kettle",
	});
}

export default Component;
