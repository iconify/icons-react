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
		"content": `<style>.b4sxvyb9n {
  fill: currentColor;
  d: path("M7.25 5.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m5-3a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75m5 3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-2.397 13.696a.75.75 0 0 0-1.133-.976l-1.47 1.47l-1.47-1.47l-.084-.073a.75.75 0 0 0-.976 1.133l2 2l.084.073a.75.75 0 0 0 .976-.073l2-2z");
}
</style><path class="b4sxvyb9n"/>`,
		"fallback": "fluent:text-indent-decrease-rtl-90-24-regular",
	});
}

export default Component;
