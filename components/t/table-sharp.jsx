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
		"content": `<style>.yg1bmcl7b {
  fill: currentColor;
  d: path("M11 16H3v5h8zm2 0v5h8v-5zm-2-2V9H3v5zm2 0h8V9h-8zM3 7h18V3H3z");
}
</style><path class="yg1bmcl7b"/>`,
		"fallback": "material-symbols:table-sharp",
	});
}

export default Component;
