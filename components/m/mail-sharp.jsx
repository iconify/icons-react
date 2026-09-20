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
		"content": `<style>.rjt28jbjm {
  fill: currentColor;
  d: path("M3 19V5h18v14zm9-6.884l8-5.231V6l-8 5l-8-5v.885z");
}
</style><path class="rjt28jbjm"/>`,
		"fallback": "material-symbols-light:mail-sharp",
	});
}

export default Component;
