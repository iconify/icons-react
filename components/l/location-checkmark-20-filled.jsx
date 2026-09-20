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
		"content": `<style>.zyz6wmf6t {
  fill: currentColor;
  d: path("M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.005 7.005 0 0 1 0-9.904a7 7 0 0 1 9.899 0m-1.534 3.233a.5.5 0 0 0-.765-.638L9 10.298L7.354 8.651l-.07-.058a.5.5 0 0 0-.638.765l2 2l.07.058a.5.5 0 0 0 .638-.058l4.004-4.004z");
}
</style><path class="zyz6wmf6t"/>`,
		"fallback": "fluent:location-checkmark-20-filled",
	});
}

export default Component;
