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
		"content": `<style>.hvvmif0jp {
  fill: currentColor;
  d: path("M18.175 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11h14.175L16.8 9.6q-.3-.3-.288-.7t.313-.7q.3-.275.713-.287t.687.287l3.075 3.1q.3.3.3.7t-.3.7l-3.1 3.1q-.275.275-.687.275T16.8 15.8q-.3-.3-.3-.712t.3-.713z");
}
</style><path class="hvvmif0jp"/>`,
		"fallback": "material-symbols:trending-flat-rounded",
	});
}

export default Component;
