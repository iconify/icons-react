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
		"content": `<style>.dvo2cwb8y {
  fill: currentColor;
  d: path("M10 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 2m4 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3.5.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM10 16a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-6.5-5.5a.5.5 0 0 0 0-1H2.463a.5.5 0 0 0 0 1zm.646-6.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708m.708 11.708a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708.708zm11-11.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708m-.708 11.708a.5.5 0 0 0 .708-.708l-1-1a.5.5 0 0 0-.708.708z");
}
</style><path class="dvo2cwb8y"/>`,
		"fallback": "fluent:weather-sunny-20-filled",
	});
}

export default Component;
