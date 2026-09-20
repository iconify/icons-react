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
		"content": `<style>.ywb28ib6z {
  fill: currentColor;
  d: path("M13 15V9h2.5V7H13V1h7v6h-2.5v2H20v6zm-9 8v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v6H8.5v2H11v6z");
}
</style><path class="ywb28ib6z"/>`,
		"fallback": "material-symbols:mitre",
	});
}

export default Component;
