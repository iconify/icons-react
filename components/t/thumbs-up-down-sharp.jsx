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
		"content": `<style>.v7is9gtug {
  fill: currentColor;
  d: path("M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14zm18.6 10l-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6z");
}
</style><path class="v7is9gtug"/>`,
		"fallback": "material-symbols:thumbs-up-down-sharp",
	});
}

export default Component;
