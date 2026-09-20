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
		"content": `<style>.smlo_xbvh {
  fill: currentColor;
  d: path("M2 21v-5h20v5zm8.575-7q-.525.5-1.925.5t-1.9-.5t-1.4-.5t-1.425.5T2 14.5v-2q.9 0 1.425-.5t1.925-.5t1.9.5t1.4.5t1.425-.5T12 11.5t1.925.5t1.425.5t1.4-.5t1.9-.5t1.975.5t1.375.5v2q-1.4 0-1.875-.5t-1.375-.5t-1.45.5t-1.95.5t-1.925-.5T12 13.5t-1.425.5M2 10V9q0-2.875 2.713-4.437T12 3t7.288 1.563T22 9v1z");
}
</style><path class="smlo_xbvh"/>`,
		"fallback": "material-symbols:lunch-dining-sharp",
	});
}

export default Component;
