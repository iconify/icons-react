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
		"content": `<style>.k2cy5k4ap {
  fill: currentColor;
  d: path("M11 22V5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V22z");
}
</style><path class="k2cy5k4ap"/>`,
		"fallback": "material-symbols:north-outline-sharp",
	});
}

export default Component;
