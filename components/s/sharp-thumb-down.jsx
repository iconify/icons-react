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
		"content": `<style>.pg2x02bmr {
  fill: currentColor;
  d: path("M9.83 23L17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z");
}
</style><path class="pg2x02bmr"/>`,
		"fallback": "ic:sharp-thumb-down",
	});
}

export default Component;
