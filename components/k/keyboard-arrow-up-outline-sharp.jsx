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
		"content": `<style>.wf4rqy1xp {
  fill: currentColor;
  d: path("m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z");
}
</style><path class="wf4rqy1xp"/>`,
		"fallback": "material-symbols:keyboard-arrow-up-outline-sharp",
	});
}

export default Component;
