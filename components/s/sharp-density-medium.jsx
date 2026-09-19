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
		"content": `<style>.zqwvaxbyk {
  fill: currentColor;
  d: path("M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z");
}
</style><path class="zqwvaxbyk"/>`,
		"fallback": "ic:sharp-density-medium",
	});
}

export default Component;
