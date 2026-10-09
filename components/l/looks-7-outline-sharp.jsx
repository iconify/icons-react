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
		"content": `<style>.yvswcrb6p {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm6.462-2.5H12.5l2-7.936V7.5h-5v1h3.962z");
}
</style><path class="yvswcrb6p"/>`,
		"fallback": "material-symbols-light:looks-7-outline-sharp",
	});
}

export default Component;
