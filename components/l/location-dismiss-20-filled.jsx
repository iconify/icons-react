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
		"content": `<style>.fk5bsixok {
  fill: currentColor;
  d: path("M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114l-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118l-2.043-1.985l-1.52-1.499a7.005 7.005 0 0 1 0-9.904a7 7 0 0 1 9.899 0M7.146 6.146a.5.5 0 0 0 0 .708L9.293 9l-2.147 2.146a.5.5 0 0 0 .708.708L10 9.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 9l2.147-2.146a.5.5 0 0 0-.708-.708L10 8.293L7.854 6.146a.5.5 0 0 0-.708 0");
}
</style><path class="fk5bsixok"/>`,
		"fallback": "fluent:location-dismiss-20-filled",
	});
}

export default Component;
