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
		"content": `<style>.u109lurwt {
  fill: currentColor;
  d: path("M8.435 20h7.092l1.289-5.096h-9.67zm-.781 1l-1.539-6.096h11.731L16.308 21zM5 13.904h14v-2.385H5zm6.98-5.788q0-2.039 1.549-3.472t3.606-1.625q-.212 1.885-1.502 3.285T12.48 8.073v2.446H20v4.385H4v-4.385h7.48V8.073q-1.86-.37-3.151-1.76T6.827 3.02q2.038.192 3.596 1.635q1.558 1.442 1.558 3.462");
}
</style><path class="u109lurwt"/>`,
		"fallback": "material-symbols-light:potted-plant-outline-sharp",
	});
}

export default Component;
