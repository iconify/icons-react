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
		"content": `<style>.r0xmiylwe {
  fill: currentColor;
  d: path("M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z");
}

.zo8yn6dto {
  fill: currentColor;
  d: path("M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z");
}
</style><path class="r0xmiylwe"/><path class="zo8yn6dto"/>`,
		"fallback": "ic:sharp-screenshot-monitor",
	});
}

export default Component;
