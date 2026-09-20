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
		"content": `<style>.y6yw0mbse {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h4.457A5.5 5.5 0 0 1 18 10.257V6.75A2.75 2.75 0 0 0 15.25 4zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6 1.495a.5.5 0 0 0 .757.429l2.5-1.497a.5.5 0 0 0 0-.858l-2.5-1.497A.5.5 0 0 0 13 13z");
}
</style><path class="y6yw0mbse"/>`,
		"fallback": "fluent:slide-play-20-filled",
	});
}

export default Component;
