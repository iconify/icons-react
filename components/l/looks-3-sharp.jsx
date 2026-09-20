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
		"content": `<style>.p4oh-kbtv {
  fill: currentColor;
  d: path("M9 17h6V7H9v2h4v2h-2v2h2v2H9zm-6 4V3h18v18z");
}
</style><path class="p4oh-kbtv"/>`,
		"fallback": "material-symbols:looks-3-sharp",
	});
}

export default Component;
