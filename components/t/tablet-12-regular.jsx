import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.omb70c9pl {
  fill: currentColor;
  d: path("M5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2.5 2A1.5 1.5 0 0 0 1 3.5v5A1.5 1.5 0 0 0 2.5 10h7A1.5 1.5 0 0 0 11 8.5v-5A1.5 1.5 0 0 0 9.5 2zM2 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z");
}
</style><path class="omb70c9pl"/>`,
		"fallback": "fluent:tablet-12-regular",
	});
}

export default Component;
