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
		"content": `<style>.j5_o3nwgs {
  fill: currentColor;
  d: path("M9.5 6V3.55L3.55 9.5H6V11H1V6h1.5v2.45L8.45 2.5H6V1h5v5zm4.075 17L7.6 17l1.575-1.625l2.825.8V7h2v11.825l-2.425-.675l2.85 2.85H21v-7h2v9zM15 16v-5h2v5zm3 0v-4h2v4zm-.5 2");
}
</style><path class="j5_o3nwgs"/>`,
		"fallback": "material-symbols:pinch-outline-sharp",
	});
}

export default Component;
