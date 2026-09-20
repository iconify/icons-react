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
		"content": `<style>.eobwdechs {
  fill: currentColor;
  d: path("M3 20L6.616 4h10.75L21 20zm1.23-1h15.5L16.555 5H7.408zm7.25-8.079v4.695h1V10.92l2.12 2.114l.708-.708L11.98 9l-3.289 3.289l.708.713zM19.73 19H4.23z");
}
</style><path class="eobwdechs"/>`,
		"fallback": "material-symbols-light:tilt-arrow-up-outline-sharp",
	});
}

export default Component;
