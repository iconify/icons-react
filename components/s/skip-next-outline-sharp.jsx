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
		"content": `<style>.l52pqtbvm {
  fill: currentColor;
  d: path("M16.27 16.616V7.385h1v9.23zm-9.54 0V7.385L13.655 12zm1-1.866L11.862 12l-4.13-2.75z");
}
</style><path class="l52pqtbvm"/>`,
		"fallback": "material-symbols-light:skip-next-outline-sharp",
	});
}

export default Component;
