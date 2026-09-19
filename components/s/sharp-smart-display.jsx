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
		"content": `<style>.wkerpptjt {
  fill: currentColor;
  d: path("M22 4H2v16h20zM9.5 16.5v-9l7 4.5z");
}
</style><path class="wkerpptjt"/>`,
		"fallback": "ic:sharp-smart-display",
	});
}

export default Component;
