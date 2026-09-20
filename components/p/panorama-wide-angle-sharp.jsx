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
		"content": `<style>.sw8x0z94m {
  fill: currentColor;
  d: path("M7.463 19.788Q5.2 19.575 3 19q-.525-1.725-.763-3.463T2 12t.238-3.537T3 5q1.975-.5 4.2-.75T12 4t4.8.25T21 5q.525 1.725.763 3.463T22 12t-.25 3.538T21 19q-2.2.575-4.462.788T12 20t-4.538-.213");
}
</style><path class="sw8x0z94m"/>`,
		"fallback": "material-symbols:panorama-wide-angle-sharp",
	});
}

export default Component;
