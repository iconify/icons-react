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
		"content": `<style>.cwlia_xix {
  fill: currentColor;
  d: path("M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13M2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.646-5.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708m.708 9.708a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708.707zm9-9.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708m-.708 9.708a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707z");
}
</style><path class="cwlia_xix"/>`,
		"fallback": "fluent:weather-sunny-16-filled",
	});
}

export default Component;
