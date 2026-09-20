import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fv_lypldn {
  fill: currentColor;
  d: path("M8.186 3.256A.75.75 0 0 1 9.5 3.75v7.5a.75.75 0 0 1-1.5 0V5.746L5.814 8.244a.75.75 0 0 1-1.128 0L2.5 5.746v5.504a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.314-.494L5.25 6.61zM13.25 3a.75.75 0 0 1 .75.75v5.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V3.75a.75.75 0 0 1 .75-.75");
}
</style><path class="fv_lypldn"/>`,
		"fallback": "fluent:markdown-16-filled",
	});
}

export default Component;
