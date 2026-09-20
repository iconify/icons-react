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
		"content": `<style>.f24-01b9t {
  fill: currentColor;
  d: path("M3 21V3h18v18zm9-2h7V5h-7z");
}
</style><path class="f24-01b9t"/>`,
		"fallback": "material-symbols:side-navigation-outline-sharp",
	});
}

export default Component;
