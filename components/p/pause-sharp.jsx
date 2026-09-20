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
		"content": `<style>.itwjg14iq {
  fill: currentColor;
  d: path("M14 19V5h4v14zm-8 0V5h4v14z");
}
</style><path class="itwjg14iq"/>`,
		"fallback": "material-symbols:pause-sharp",
	});
}

export default Component;
