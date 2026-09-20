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
		"content": `<style>.c4sfd0blw {
  fill: currentColor;
  d: path("M5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M7.5 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m4.953-2.358a.5.5 0 1 0-.707.707l1.403 1.403a.5.5 0 1 0 .707-.707z");
}
</style><path class="c4sfd0blw"/>`,
		"fallback": "fluent:timer-16-filled",
	});
}

export default Component;
