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
		"content": `<style>.gmdxivbim {
  fill: currentColor;
  d: path("M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zM7 8H4v11h3zm9 11V8H8v11zm1-11v11h3V8zm-5 5.5");
}
</style><path class="gmdxivbim"/>`,
		"fallback": "material-symbols-light:trip-outline-sharp",
	});
}

export default Component;
