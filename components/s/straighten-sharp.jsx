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
		"content": `<style>.ykk9pcb4h {
  fill: currentColor;
  d: path("M3 17V7h4.5v4.23h1V7h3v4.23h1V7h3v4.23h1V7H21v10z");
}
</style><path class="ykk9pcb4h"/>`,
		"fallback": "material-symbols-light:straighten-sharp",
	});
}

export default Component;
