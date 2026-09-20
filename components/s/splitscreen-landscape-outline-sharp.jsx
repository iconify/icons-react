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
		"content": `<style>.j71r3vb-o {
  fill: currentColor;
  d: path("M13 16h5V8h-5zm-7 0h5V8H6zm-4 4V4h20v16zm18-2V6H4v12zM4 6v12z");
}
</style><path class="j71r3vb-o"/>`,
		"fallback": "material-symbols:splitscreen-landscape-outline-sharp",
	});
}

export default Component;
