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
		"content": `<style>.qerbupbry {
  fill: currentColor;
  d: path("M2 4h20v16H2z");
}
</style><path class="qerbupbry"/>`,
		"fallback": "ic:sharp-rectangle",
	});
}

export default Component;
