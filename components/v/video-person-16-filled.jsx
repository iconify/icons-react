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
		"content": `<style>.x5fkptthv {
  fill: currentColor;
  d: path("M10 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25zM11 12h2.25a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75H5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z");
}
</style><path class="x5fkptthv"/>`,
		"fallback": "fluent:video-person-16-filled",
	});
}

export default Component;
