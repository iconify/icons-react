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
		"content": `<style>.gc2-nsv5c {
  fill: currentColor;
  d: path("M4 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm16 13H4v2h16Z");
}
</style><path class="gc2-nsv5c"/>`,
		"fallback": "coolicons:laptop-fill-sharp",
	});
}

export default Component;
