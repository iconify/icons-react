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
		"content": `<style>.j-bfoybdd {
  fill: currentColor;
  d: path("M5 6v1.998h10V6zm6.998 5v3h3v-3zM2 5.754a2.75 2.75 0 0 1 2.75-2.75h10.5A2.75 2.75 0 0 1 18 5.753v8.5a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 14.253zM4 5.5v2.998a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5m6.998 5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5m-6.498 0a.5.5 0 0 0 0 1h5.004a.5.5 0 0 0 0-1zM4 14a.5.5 0 0 0 .5.5h5.004a.5.5 0 0 0 0-1H4.5a.5.5 0 0 0-.5.5");
}
</style><path class="j-bfoybdd"/>`,
		"fallback": "fluent:preview-link-20-filled",
	});
}

export default Component;
