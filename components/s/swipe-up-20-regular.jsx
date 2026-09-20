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
		"content": `<style>.betme4wko {
  fill: currentColor;
  d: path("M10.354 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L9.5 3.707V14.5a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 0 0 .708-.708zM6 14a4 4 0 0 1 2.5-3.71v1.111a3 3 0 1 0 3 0v-1.11A4.001 4.001 0 0 1 10 18a4 4 0 0 1-4-4");
}
</style><path class="betme4wko"/>`,
		"fallback": "fluent:swipe-up-20-regular",
	});
}

export default Component;
