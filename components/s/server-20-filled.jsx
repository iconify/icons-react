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
		"content": `<style>.k-ztpjbie {
  fill: currentColor;
  d: path("M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 2zM7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 7a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5");
}
</style><path class="k-ztpjbie"/>`,
		"fallback": "fluent:server-20-filled",
	});
}

export default Component;
