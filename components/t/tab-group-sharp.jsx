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
		"content": `<style>.fdffd6b5z {
  fill: currentColor;
  d: path("M3.5 20V6.616h1V19h12.385v1zm3-3V3h14v14zm6.77-9.961h6.23V4h-6.23z");
}
</style><path class="fdffd6b5z"/>`,
		"fallback": "material-symbols-light:tab-group-sharp",
	});
}

export default Component;
