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
		"content": `<style>.h74pwob-r {
  fill: currentColor;
  d: path("M7 17h10V7h-4q-.825 0-1.412.588T11 9v1.3q-.5.275-.75.7T10 12q0 .825.588 1.413T12 14t1.413-.587T14 12q0-.575-.275-1T13 10.3V9h2v6H9V9h1V7H7zm-4 4V3h18v18z");
}
</style><path class="h74pwob-r"/>`,
		"fallback": "material-symbols:nfc-sharp",
	});
}

export default Component;
