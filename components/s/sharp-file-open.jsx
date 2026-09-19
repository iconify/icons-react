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
		"content": `<style>.boz4ahb7i {
  fill: currentColor;
  d: path("M14 2H4v20h11v-8h5V8zm-1 7V3.5L18.5 9zm4 12.66V16h5.66v2h-2.24l2.95 2.95l-1.41 1.41L19 19.41v2.24h-2z");
}
</style><path class="boz4ahb7i"/>`,
		"fallback": "ic:sharp-file-open",
	});
}

export default Component;
