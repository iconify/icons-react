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
		"content": `<style>.o_nzoyyms {
  fill: currentColor;
  d: path("m12 14.827l-2.789-2.788l.689-.708l1.6 1.53V9.04h1v3.823l1.6-1.531l.689.708zM9.962 21l-1.12-3.934q-1.258-.739-2.05-2.087T6 12t.792-2.979t2.05-2.087L9.962 3h4.077l1.119 3.935q1.258.738 2.05 2.086T18 12t-.792 2.979t-2.05 2.087L14.038 21zm5.576-5.462Q17 14.075 17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17t3.538-1.463");
}
</style><path class="o_nzoyyms"/>`,
		"fallback": "material-symbols-light:watch-arrow-down",
	});
}

export default Component;
