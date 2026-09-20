import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fhip4ubua {
  fill: currentColor;
  d: path("M9.5 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.25 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M8.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M11 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v2.5h3V5zm1 5.5H3V13a2 2 0 0 0 2 2h1zm1 0V15h8a2 2 0 0 0 2-2v-2.5zm10-1V7a2 2 0 0 0-2-2H7v4.5z");
}
</style><path class="fhip4ubua"/>`,
		"fallback": "fluent:likert-20-regular",
	});
}

export default Component;
