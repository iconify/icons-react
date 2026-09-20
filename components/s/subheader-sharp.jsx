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
		"content": `<style>.i6iva4bso {
  fill: currentColor;
  d: path("M6.616 9.192h8v-2h-8zM4 20V4h16v16z");
}
</style><path class="i6iva4bso"/>`,
		"fallback": "material-symbols-light:subheader-sharp",
	});
}

export default Component;
