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
		"content": `<style>.oifwthb4m {
  fill: currentColor;
  d: path("m14 7l-5 5l5 5z");
}
</style><path class="oifwthb4m"/>`,
		"fallback": "ic:sharp-arrow-left",
	});
}

export default Component;
