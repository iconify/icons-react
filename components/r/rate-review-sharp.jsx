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
		"content": `<style>.cf91rvbus {
  fill: currentColor;
  d: path("M6.385 13.616h2.21l5.89-5.897l-2.173-2.21l-5.927 5.897zM12.3 8.689l-.95-.945l.965-.955l.916.95zm-.484 4.927h5.8v-1h-4.8zM3 20.077V3h18v14H6.077z");
}
</style><path class="cf91rvbus"/>`,
		"fallback": "material-symbols-light:rate-review-sharp",
	});
}

export default Component;
