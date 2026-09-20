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
		"content": `<style>.fkb1f-bjh {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm3-1h2.25V5H6zm3.25 0h2.25V5H9.25zm3.25 0h2.25V5H12.5zm3.25 0H18V5h-2.25z");
}
</style><path class="fkb1f-bjh"/>`,
		"fallback": "material-symbols-light:vertical-shades-closed-outline",
	});
}

export default Component;
