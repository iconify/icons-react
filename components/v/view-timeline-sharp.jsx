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
		"content": `<style>.kn7-mf9wj {
  fill: currentColor;
  d: path("M4 20V4h16v16zm2.539-3.5h4.923v-1H6.539zm6-8h4.923v-1h-4.923zm-3 4h4.923v-1H9.539z");
}
</style><path class="kn7-mf9wj"/>`,
		"fallback": "material-symbols-light:view-timeline-sharp",
	});
}

export default Component;
