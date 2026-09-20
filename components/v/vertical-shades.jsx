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
		"content": `<style>.ix06gebmg {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm8-2h4V5h-4z");
}
</style><path class="ix06gebmg"/>`,
		"fallback": "material-symbols:vertical-shades",
	});
}

export default Component;
