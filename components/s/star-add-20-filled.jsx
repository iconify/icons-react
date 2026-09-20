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
		"content": `<style>.oc53b-h4k {
  fill: currentColor;
  d: path("M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-.549.535a5.5 5.5 0 0 0-7.959 6.259l-3.05 1.604a1 1 0 0 1-1.452-1.055l.738-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627zm9.898 11.6a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1h-1.5z");
}
</style><path class="oc53b-h4k"/>`,
		"fallback": "fluent:star-add-20-filled",
	});
}

export default Component;
