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
		"content": `<style>.os37_ibtk {
  fill: currentColor;
  d: path("m2.277 17.781l8.891-13.336a1 1 0 0 1 1.664 0l8.891 13.336A2.071 2.071 0 0 1 20 21H4a2.069 2.069 0 0 1-1.723-3.219m1.664 1.11a.07.07 0 0 0-.003.072A.07.07 0 0 0 4 19h10.698L11.604 7.397Z");
}
</style><path class="os37_ibtk"/>`,
		"fallback": "coolicons:pyramid-fill-round",
	});
}

export default Component;
