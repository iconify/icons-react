import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htmx70bet {
  fill: currentColor;
  d: path("M214 152.09V216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6v-63.91a6 6 0 0 1 12 0V210h148v-57.91a6 6 0 0 1 12 0m-126 30h80a6 6 0 1 0 0-12H88a6 6 0 1 0 0 12m5.4-52.93l77.27 20.67a6 6 0 1 0 3.11-11.57L96.5 117.54a6 6 0 1 0-3.1 11.58Zm18.93-49.74l69.28 40a6.05 6.05 0 0 0 3 .8a6 6 0 0 0 3-11.18L118.33 69a6 6 0 1 0-6 10.38Zm87.75 13.35a6 6 0 0 0 8.48-8.48L152 27.76a6 6 0 1 0-8.48 8.47Z");
}
</style><path class="htmx70bet"/>`,
		"fallback": "ph:stack-overflow-logo-light",
	});
}

export default Component;
