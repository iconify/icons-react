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
		"content": `<style>.gr9gnfb0h {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V8H4z");
}
</style><path class="gr9gnfb0h"/>`,
		"fallback": "material-symbols:web-asset-sharp",
	});
}

export default Component;
