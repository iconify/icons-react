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
		"content": `<style>.unrtt1bfk {
  fill: currentColor;
  d: path("M6 22h7v-4H6zm9 0h7v-4h-7zM2 18V2h16v2H4v14zm4-2h7v-4H6zm9 0h7v-4h-7zm-9-6h16V6H6z");
}
</style><path class="unrtt1bfk"/>`,
		"fallback": "material-symbols:table-view-sharp",
	});
}

export default Component;
