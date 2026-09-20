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
		"content": `<style>.xjvv5xafc {
  fill: currentColor;
  d: path("M3 3.75A.75.75 0 0 1 3.75 3h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5H9.5v7.706A5.5 5.5 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H6.75a.75.75 0 0 1 0-1.5H8v-11H4.5v.75a.75.75 0 0 1-1.5 0zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="xjvv5xafc"/>`,
		"fallback": "fluent:text-add-t-20-filled",
	});
}

export default Component;
