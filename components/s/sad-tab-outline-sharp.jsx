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
		"content": `<style>.pri4f53mt {
  fill: currentColor;
  d: path("M7.5 16.5H9V15h6v1.5h1.5V15H15v-1.5H9V15H7.5ZM8 12h1.5V9.5H8Zm6.5 0H16V9.5h-1.5ZM2 20V4h8l2 2h10v14Zm2-2h16V8H4Zm0 0V8Z");
}
</style><path class="pri4f53mt"/>`,
		"fallback": "material-symbols:sad-tab-outline-sharp",
	});
}

export default Component;
