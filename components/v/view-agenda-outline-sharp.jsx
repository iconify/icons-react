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
		"content": `<style>.fkyk0ubzl {
  fill: currentColor;
  d: path("M3 21v-8h18v8zm2-2h14v-4H5zm-2-8V3h18v8zm2-2h14V5H5zm0 6v4zM5 5v4z");
}
</style><path class="fkyk0ubzl"/>`,
		"fallback": "material-symbols:view-agenda-outline-sharp",
	});
}

export default Component;
