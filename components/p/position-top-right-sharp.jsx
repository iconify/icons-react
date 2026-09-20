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
		"content": `<style>.nmod78cxe {
  fill: currentColor;
  d: path("M9 10h9V7H9zM3 21V3h18v18z");
}
</style><path class="nmod78cxe"/>`,
		"fallback": "material-symbols:position-top-right-sharp",
	});
}

export default Component;
