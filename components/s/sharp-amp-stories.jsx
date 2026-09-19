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
		"content": `<style>.dxrmu3bmu {
  fill: currentColor;
  d: path("M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z");
}
</style><path class="dxrmu3bmu"/>`,
		"fallback": "ic:sharp-amp-stories",
	});
}

export default Component;
