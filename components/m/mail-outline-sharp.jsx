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
		"content": `<style>.yde364f1h {
  fill: currentColor;
  d: path("M3 19V5h18v14zm9-6.884L4 6.885V18h16V6.885zM12 11l7.692-5H4.308zM4 6.885V6v12z");
}
</style><path class="yde364f1h"/>`,
		"fallback": "material-symbols-light:mail-outline-sharp",
	});
}

export default Component;
