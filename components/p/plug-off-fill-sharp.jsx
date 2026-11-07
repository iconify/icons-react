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
		"content": `<style>.z4c3lh7_a {
  fill: currentColor;
  d: path("m20.707 2.707l-18 18a.999.999 0 1 1-1.414-1.414L5 15.586V7a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0v3h4V3a1 1 0 0 1 2 0v1.586l3.293-3.293a.999.999 0 1 1 1.414 1.414M8.243 18L19 7.243V17a1 1 0 0 1-1 1h-5v3a1 1 0 0 1-2 0v-3Z");
}
</style><path class="z4c3lh7_a"/>`,
		"fallback": "coolicons:plug-off-fill-sharp",
	});
}

export default Component;
