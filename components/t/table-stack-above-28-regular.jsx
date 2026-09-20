import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uc677-35i {
  fill: currentColor;
  d: path("M3.75 3a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zm17.5 22A3.75 3.75 0 0 0 25 21.25V10.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.75A3.75 3.75 0 0 0 6.75 25zM9.5 11v6h-5v-6zm1.5 6v-6h6v6zm-1.5 1.5v5H6.75a2.25 2.25 0 0 1-2.25-2.25V18.5zm1.5 5v-5h6v5zm10.25 0H18.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25M23.5 17h-5v-6h5z");
}
</style><path class="uc677-35i"/>`,
		"fallback": "fluent:table-stack-above-28-regular",
	});
}

export default Component;
