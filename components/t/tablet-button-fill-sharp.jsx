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
		"content": `<style>.vjmwf8blc {
  fill: currentColor;
  d: path("M3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m9.01-4H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="vjmwf8blc"/>`,
		"fallback": "coolicons:tablet-button-fill-sharp",
	});
}

export default Component;
