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
		"content": `<style>.pp4_4qbib {
  fill: currentColor;
  d: path("M5 17h14v-2H5zm0-4h14v-2H5zm0-4h10V7H5zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z");
}
</style><path class="pp4_4qbib"/>`,
		"fallback": "material-symbols:text-ad-outline",
	});
}

export default Component;
