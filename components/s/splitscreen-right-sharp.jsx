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
		"content": `<style>.zipj-761y {
  fill: currentColor;
  d: path("M13 21V3h8v18zM3 21V3h8v18zM5 5v14h4V5z");
}
</style><path class="zipj-761y"/>`,
		"fallback": "material-symbols:splitscreen-right-sharp",
	});
}

export default Component;
