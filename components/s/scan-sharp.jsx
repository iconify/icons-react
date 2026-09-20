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
		"content": `<style>.cx-ciib0v {
  fill: currentColor;
  d: path("M14 8h4l-4-4zM5 21v-4.5h14V21zm-3.423-6.5v-1h20.846v1zM5 11.5V3h9.5L19 7.5v4z");
}
</style><path class="cx-ciib0v"/>`,
		"fallback": "material-symbols-light:scan-sharp",
	});
}

export default Component;
