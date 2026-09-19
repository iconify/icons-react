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
		"content": `<style>.vwjuerb_o {
  fill: currentColor;
  d: path("M10 4H2v16h20V6H12z");
}
</style><path class="vwjuerb_o"/>`,
		"fallback": "ic:sharp-folder",
	});
}

export default Component;
