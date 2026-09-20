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
		"content": `<style>.uioha4-9b {
  fill: currentColor;
  d: path("M18 6c0-1.104-.896-2.019-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207a5.5 5.5 0 0 1-.185-1H4.001a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8.004v4.597a5.5 5.5 0 0 1 1-.392V5H16a1 1 0 0 1 1 1v3.6a5.5 5.5 0 0 1 1.001.657zm-3.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5");
}
</style><path class="uioha4-9b"/>`,
		"fallback": "fluent:panel-right-add-20-regular",
	});
}

export default Component;
