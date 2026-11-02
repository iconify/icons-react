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
		"content": `<style>.f7gf70b8u {
  fill: currentColor;
  d: path("m14.414 11l1.293 1.293a1 1 0 0 1 0 1.414l-7 7a3.828 3.828 0 0 1-5.414-5.414l7-7a1 1 0 0 1 1.414 0L13 9.586l6.293-6.293a.999.999 0 1 1 1.414 1.414Z");
}
</style><path class="f7gf70b8u"/>`,
		"fallback": "coolicons:screwdriver-fill-sharp",
	});
}

export default Component;
