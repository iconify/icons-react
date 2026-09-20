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
		"content": `<style>.di3nsffby {
  fill: currentColor;
  d: path("m7.654 21l-1.385-5.5h11.423L16.308 21zM11.98 8.115q0-2.038 1.548-3.47q1.548-1.434 3.606-1.626q-.212 1.885-1.502 3.285T12.48 8.073v2.446H20v4.173H4V10.52h7.48V8.073q-1.86-.37-3.151-1.76T6.827 3.02q2.038.192 3.596 1.635q1.558 1.442 1.558 3.462");
}
</style><path class="di3nsffby"/>`,
		"fallback": "material-symbols-light:potted-plant-sharp",
	});
}

export default Component;
