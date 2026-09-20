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
		"content": `<style>.hthzk1a1g {
  fill: currentColor;
  d: path("M14.5 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM5.5 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="hthzk1a1g"/>`,
		"fallback": "fluent:text-bullet-list-ltr-90-20-regular",
	});
}

export default Component;
