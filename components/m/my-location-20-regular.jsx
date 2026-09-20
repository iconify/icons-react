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
		"content": `<style>.w6qyidhgv {
  fill: currentColor;
  d: path("M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m.5-10.5a.5.5 0 0 0-1 0v1.52A6 6 0 0 0 4.02 9.5H2.5a.5.5 0 0 0 0 1h1.52a6 6 0 0 0 5.48 5.48v1.52a.5.5 0 0 0 1 0v-1.52a6 6 0 0 0 5.48-5.48h1.52a.5.5 0 0 0 0-1h-1.52a6 6 0 0 0-5.48-5.48zM10 15a5 5 0 1 1 0-10a5 5 0 0 1 0 10");
}
</style><path class="w6qyidhgv"/>`,
		"fallback": "fluent:my-location-20-regular",
	});
}

export default Component;
