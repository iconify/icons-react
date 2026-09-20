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
		"content": `<style>.tvyu1x31d {
  fill: currentColor;
  d: path("M14.5 15H18V9h-3.5zM4 17V7h6.5v2H6v6h4.5v2zm8.5 0V7H20v10z");
}
</style><path class="tvyu1x31d"/>`,
		"fallback": "material-symbols:language-us-colemak-sharp",
	});
}

export default Component;
