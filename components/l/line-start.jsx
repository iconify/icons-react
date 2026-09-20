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
		"content": `<style>.yx_y7kbnk {
  fill: currentColor;
  d: path("M4.5 14.5q-1.05 0-1.775-.725T2 12t.725-1.775T4.5 9.5q.775 0 1.4.425T6.8 11H22v2H6.8q-.275.65-.9 1.075t-1.4.425");
}
</style><path class="yx_y7kbnk"/>`,
		"fallback": "material-symbols:line-start",
	});
}

export default Component;
